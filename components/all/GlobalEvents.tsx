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

        const tableRows = tempDiv.querySelectorAll("tr");
        tableRows.forEach((tableRow) => {
          const tableColumns = Array.from(tableRow.querySelectorAll("th, td"));

          tableColumns.forEach((tableColumn) => {
            const breaks = Array.from(tableColumn.querySelectorAll("br"));
            breaks.forEach((br) => br.replaceWith(" "));

            if (!tableColumn.textContent) {
              tableColumn.textContent = "X";
            }
          });

          let text = "";
          for (let i = 1; i < tableColumns.length; i++) {
            text += ` | ${tableColumns[i].textContent}`;
            tableColumns[i].textContent = "";
          }
          tableColumns[0].textContent += text;
        });

        const newLineElements = tempDiv.querySelectorAll(
          "header, nav, article, h1, h2, h3, p, li, br, .complex-code-container, table, caption, tr",
        );
        newLineElements.forEach((newLineElement) => {
          if (newLineElement.localName === "nav") {
            const ariaLabel = newLineElement.getAttribute("aria-label") ?? "";

            switch (ariaLabel) {
              case necessaryAriaLabels[0]:
                newLineElement.prepend("Main Navigation\n");
                newLineElement.append("\n");
                return;
              case necessaryAriaLabels[1]:
                if (newLineElement.textContent === "") {
                  newLineElement.prepend("Home");
                }
                newLineElement.prepend("Article Navigation\n");
                newLineElement.append("\n");
                return;
              case necessaryAriaLabels[2]:
                newLineElement.querySelector("h2")!.textContent =
                  "Reference Navigation";
                newLineElement.append("\n");
                return;
              case necessaryAriaLabels[3]:
                newLineElement.prepend("Page Navigation\n");
                newLineElement.append("\n");
                return;
              default:
                return;
            }
          }

          if (newLineElement.localName === "article") {
            newLineElement.prepend("Article\n");
            newLineElement.append("\n");
            return;
          }

          if (newLineElement.localName === "p") {
            // JetBrains WebStorm Plugins
            if (
              newLineElement.childElementCount === 1 &&
              newLineElement.children[0].localName === "svg"
            ) {
              newLineElement.textContent =
                newLineElement.children[0].ariaLabel ?? "";
            }

            newLineElement.append("\n");
            return;
          }

          if (newLineElement.localName === "li") {
            if (newLineElement.querySelector("a")) {
              newLineElement.append("\n");
            }
            return;
          }

          if (newLineElement.classList.contains("complex-code-container")) {
            newLineElement.querySelector("span")?.append("\n");
            newLineElement.querySelector("button")?.remove();
            newLineElement.prepend("```code\n");
            newLineElement.append("```\n");
            return;
          }

          if (newLineElement.localName === "table") {
            newLineElement.prepend("```table\n");
            newLineElement.append("```\n");
            return;
          }

          newLineElement.append("\n"); // header, h1, h2, h3, br, caption, tr
        });

        formattedText = tempDiv.textContent;
      }

      formattedText = formattedText.replace("#Last Updated:", "# Last Updated");

      const lines = [];
      let isCodeBlock = false;
      for (const line of formattedText.split("\n")) {
        const trimmedLine = line.trim();

        if (!isCodeBlock && trimmedLine === "```code") {
          isCodeBlock = true;
          lines.push(line);
          continue;
        }

        if (isCodeBlock && trimmedLine === "```") {
          isCodeBlock = false;
          lines.push(line);
          continue;
        }

        if (isCodeBlock) {
          lines.push(line);
        } else {
          lines.push(trimmedLine);
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
        /(```code[\s\S]*?```)|((\n\s*){2,})/g,
        (_, codeBlock) => {
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
