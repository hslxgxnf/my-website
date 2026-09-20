"use client";

import { useEffect } from "react";

import copyRange from "@/functions/all/copyRange";

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
        formattedText = copyRange(range);
      }

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
