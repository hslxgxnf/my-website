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
          const label = nav.getAttribute("aria-label") ?? "";

          if (label === necessaryAriaLabels[0]) {
            nav.prepend("Main Navigation\n");
          }

          if (label === necessaryAriaLabels[1]) {
            nav.prepend("\nArticle Navigation\n");
          }

          return !necessaryAriaLabels.includes(label);
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
          "header, aside, article, h1, h2, h3, p, li, br",
        );
        blockElements.forEach((blockElement) => {
          if (blockElement.localName === "header") {
            blockElement.append("\n\n");
            return;
          }

          if (blockElement.localName === "aside") {
            const label =
              blockElement.querySelector("nav")?.getAttribute("aria-label") ??
              "";
            if (necessaryAriaLabels.includes(label)) {
              blockElement.append("\n");
            }

            return;
          }

          if (blockElement.localName === "li") {
            if (blockElement.querySelector("a")) {
              blockElement.append("\n");
            }

            return;
          }

          blockElement.append("\n");
        });

        formattedText = tempDiv.textContent;

        console.log(tempDiv);
      }

      formattedText = formattedText.replace("#Last Updated:", "# Last Updated");

      const lines = formattedText.split("\n");
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].endsWith("#") && lines[i - 1] !== "") {
          lines[i - 1] += "\n";
        }
      }
      formattedText = lines.join("\n");

      formattedText = formattedText.trim();

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
