"use client";

import type { MouseEvent, KeyboardEvent } from "react";

import selectAndCopyText from "@/functions/main-description/selectAndCopyText";

interface HighlightSimpleCodeProps {
  copy?: boolean;
  pre?: boolean;
  children: string;
}
export default function HighlightSimpleCode({
  copy,
  pre,
  children,
}: HighlightSimpleCodeProps) {
  async function handleClick(event: MouseEvent<HTMLElement>) {
    await selectAndCopyText(event.currentTarget);
  }

  async function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      await selectAndCopyText(event.currentTarget);
    }
  }

  if (copy) {
    if (pre) {
      return (
        <pre>
          <code
            role="button"
            tabIndex={0}
            className="copy pre"
            title="Copy"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            {children}
          </code>
        </pre>
      );
    } else {
      return (
        <code
          role="button"
          tabIndex={0}
          className="copy"
          title="Copy"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {children}
        </code>
      );
    }
  } else {
    if (pre) {
      return (
        <pre>
          <code className="pre">{children}</code>
        </pre>
      );
    } else {
      return <code className="plain">{children}</code>;
    }
  }
}
