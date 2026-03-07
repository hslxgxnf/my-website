"use client";

import { useRef } from "react";

interface CodeExampleCopyProps {
  children: string;
}

export default function CodeExampleCopy({ children }: CodeExampleCopyProps) {
  const codeRef = useRef<HTMLElement>(null);

  async function handleClick() {
    // Copy
    try {
      await navigator.clipboard.writeText(children);
    } catch (error) {
      console.error(`Could not copy to clipboard due to ${error}.`);
      return;
    }

    // Select
    if (!codeRef.current) {
      console.error("No codeRef");
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(codeRef.current);

    const selection = window.getSelection();
    if (!selection) {
      console.error("No selection");
      return;
    }
    selection.removeAllRanges();
    selection.addRange(range);
  }

  return (
    <code
      className="example-copy"
      title="Copy"
      ref={codeRef}
      onClick={handleClick}
    >
      {children}
    </code>
  );
}
