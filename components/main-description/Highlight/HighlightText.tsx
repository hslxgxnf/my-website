"use client";

import type { MouseEvent, KeyboardEvent } from "react";

import selectAndCopyElement from "@/functions/main-description/selectAndCopyElement";

interface HighlightTextProps {
  copy?: boolean;
  pre?: boolean;
  children: string;
}

export default function HighlightText({
  copy,
  pre,
  children,
}: HighlightTextProps) {
  async function handleClick(event: MouseEvent<HTMLElement>) {
    await selectAndCopyElement(event.currentTarget);
  }

  async function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      await selectAndCopyElement(event.currentTarget);
    }
  }

  if (copy) {
    if (pre) {
      return (
        <pre>
          <em
            role="button"
            tabIndex={0}
            className="copy pre"
            title="Copy"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            {children}
          </em>
        </pre>
      );
    } else {
      return (
        <em
          role="button"
          tabIndex={0}
          className="copy"
          title="Copy"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {children}
        </em>
      );
    }
  } else {
    if (pre) {
      return (
        <pre>
          <em className="pre">{children}</em>
        </pre>
      );
    } else {
      return <em className="plain">{children}</em>;
    }
  }
}
