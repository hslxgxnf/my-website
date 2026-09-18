"use client";

import { useEffect } from "react";
import katex from "katex";

interface HighlightMathProps {
  children: string;
}

let listenerCount = 0;
let isCopyListenerAdded = false;

function handleCopy(event: ClipboardEvent) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return;
  }

  const range = selection.getRangeAt(0);
  const targetElement =
    range.commonAncestorContainer instanceof Element
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;
  if (!targetElement) {
    console.error("No targetElement");
    return;
  }
  const katexElement = targetElement.closest(".katex");

  let formattedText = "";
  if (katexElement) {
    const annotation = katexElement.querySelector("annotation");
    if (!annotation) {
      console.error("No annotation");
      return;
    }

    formattedText = `$${annotation.textContent}$`;
  } else {
    const fragment = range.cloneContents();
    const tempDiv = document.createElement("div");
    tempDiv.appendChild(fragment);

    const mathElements = tempDiv.querySelectorAll(".math");
    if (mathElements.length === 0) {
      return;
    }
    for (const mathElement of mathElements) {
      const annotation = mathElement.querySelector("annotation");
      if (annotation) {
        mathElement.replaceWith(`$${annotation.textContent}$`);
      } else {
        mathElement.remove();
      }
    }

    const blockElements = tempDiv.querySelectorAll(
      "section, h1, h2, h3, p, br",
    );
    blockElements.forEach((blockElement) => {
      if (blockElement.localName === "p") {
        if (blockElement.closest("li")) {
          let listDepth = 0;
          let currentElement = blockElement;

          while (currentElement) {
            const listParent = currentElement.parentElement?.closest("ul, ol");

            if (listParent) {
              listDepth++;
              currentElement = listParent;
            } else {
              break;
            }
          }

          if (listDepth > 0) {
            blockElement.prepend("*".repeat(listDepth) + " ");
          }
        }
      }

      blockElement.append("\n");
    });

    formattedText = tempDiv.textContent.trimEnd();
  }

  if (event.clipboardData) {
    event.preventDefault();
    event.clipboardData.setData("text/plain", formattedText);
  }
}

export default function HighlightMath({ children }: HighlightMathProps) {
  useEffect(() => {
    listenerCount++;

    if (!isCopyListenerAdded) {
      document.addEventListener("copy", handleCopy);
      isCopyListenerAdded = true;
    }

    return () => {
      listenerCount--;

      if (listenerCount === 0 && isCopyListenerAdded) {
        document.removeEventListener("copy", handleCopy);
        isCopyListenerAdded = false;
      }
    };
  }, []);

  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
  });

  return <span className="math" dangerouslySetInnerHTML={{ __html: html }} />;
}
