"use client";

import { useEffect } from "react";
import katex from "katex";

interface HighlightMathProps {
  children: string;
}

export default function HighlightMath({ children }: HighlightMathProps) {
  useEffect(() => {
    function handleCopy(event: ClipboardEvent) {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return;
      }

      const range = selection.getRangeAt(0);
      const fragment = range.cloneContents();
      const tempDiv = document.createElement("div");
      tempDiv.appendChild(fragment);

      const mathElements = tempDiv.querySelectorAll(".math");
      if (mathElements.length === 0) {
        return;
      }
      for (const mathElement of mathElements) {
        const annotation = mathElement.querySelector("annotation");
        if (!annotation) {
          console.error("No annotation");
          return;
        }
        mathElement.replaceWith(`$${annotation.textContent}$`);
      }

      const blockElements = tempDiv.querySelectorAll("h1, h2, h3, li, p, br");
      blockElements.forEach((blockElement) => {
        blockElement.append("\n");
      });

      const formattedText = tempDiv.textContent.trimEnd();

      if (event.clipboardData) {
        event.preventDefault();
        event.clipboardData.setData("text/plain", formattedText);
      }
    }

    if (!document.oncopy) {
      document.oncopy = handleCopy;
    }

    return () => {
      if (document.oncopy) {
        document.oncopy = null;
      }
    };
  }, []);

  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
  });

  return <span className="math" dangerouslySetInnerHTML={{ __html: html }} />;
}
