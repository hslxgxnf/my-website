"use client";

import { useEffect } from "react";

export default function GlobalEvents() {
  // touchstart
  // This event is for iOS Safari.
  useEffect(() => {
    function handleTouchStart() {}

    document.body.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  // copy
  // complex-container
  useEffect(() => {
    function handleCopy(event: ClipboardEvent) {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        return;
      }

      const range = selection.getRangeAt(0);
      const container =
        range.commonAncestorContainer instanceof Element
          ? range.commonAncestorContainer
          : range.commonAncestorContainer.parentElement;
      if (!container) {
        console.error("No container");
        return;
      }
      const singleKatexElement = container.closest(".katex");

      let formattedText = "";
      if (singleKatexElement) {
        const annotation = singleKatexElement.querySelector("annotation");
        if (!annotation) {
          console.error("No annotation");
          return;
        }

        formattedText = `$${annotation.textContent}$`;
      } else {
        const fragment = range.cloneContents();
        const tempDiv = document.createElement("div");
        tempDiv.appendChild(fragment);

        const necessaryAriaLabels = [
          "Scroll main navigation",
          "Breadcrumb navigation",
          "All reference navigation",
          "Page navigation",
        ];
        const redundantNavs = Array.from(
          tempDiv.querySelectorAll("nav"),
        ).filter((nav) => {
          if (nav.textContent === "") {
            return true;
          }

          const ariaLabel = nav.getAttribute("aria-label") ?? "";
          return !necessaryAriaLabels.includes(ariaLabel);
        });
        redundantNavs.forEach((nav) => {
          nav.remove();
        });

        const mathElements = tempDiv.querySelectorAll(".math");
        for (const mathElement of mathElements) {
          const annotation = mathElement.querySelector("annotation");
          if (annotation) {
            mathElement.replaceWith(`$${annotation.textContent}$`);
          } else {
            mathElement.remove();
          }
        }

        const blockElements = tempDiv.querySelectorAll(
          "header, nav, article, h1, h2, h3, p, li, br, .complex-code-container",
        );
        blockElements.forEach((blockElement) => {
          if (blockElement.localName === "header") {
            blockElement.append("\n\n");
            return;
          }

          if (blockElement.localName === "nav") {
            const ariaLabel = blockElement.getAttribute("aria-label") ?? "";

            switch (ariaLabel) {
              case necessaryAriaLabels[0]:
                blockElement.prepend("Main Navigation\n");
                blockElement.append("\n");
                return;
              case necessaryAriaLabels[1]:
                blockElement.prepend("Article Navigation\n");
                return;
              case necessaryAriaLabels[2]:
                blockElement.append("\n");
                return;
              case necessaryAriaLabels[3]:
                blockElement.append("\n");
                return;
              default:
                return;
            }
          }

          if (blockElement.localName === "li") {
            if (blockElement.querySelector("a")) {
              blockElement.append("\n");
            }
            return;
          }

          if (blockElement.classList.contains("complex-code-container")) {
            blockElement.querySelector("span")?.append("\n");
            blockElement.querySelector("button")?.remove();
            blockElement.prepend("```code\n");
            blockElement.append("```\n");
            return;
          }

          blockElement.append("\n");
        });

        formattedText = tempDiv.textContent;
      }

      formattedText = formattedText.replace("#Last Updated:", "# Last Updated");

      const lines = [];
      let isCodeBlock = false;
      for (const line of formattedText.split("\n")) {
        if (line.trim().startsWith("```")) {
          isCodeBlock = !isCodeBlock;
          lines.push(line);
          continue;
        }

        if (isCodeBlock) {
          lines.push(line);
        } else {
          lines.push(line.trim());
        }
      }

      for (let i = 1; i < lines.length; i++) {
        if (lines[i].endsWith("#") && lines[i - 1] !== "") {
          lines[i - 1] += "\n";
        }
      }

      formattedText = lines.join("\n");

      formattedText = formattedText.trim();

      formattedText = formattedText.replace(
        /(```[\s\S]*?```)|((\n\s*){2,})/g,
        (match, codeBlock) => {
          if (codeBlock) {
            return codeBlock;
          }

          return "\n\n";
        },
      );

      if (event.clipboardData) {
        event.preventDefault();
        event.clipboardData.setData("text/plain", formattedText);
      }
    }

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return null;
}
