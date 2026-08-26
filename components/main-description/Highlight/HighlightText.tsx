"use client";

import type { MouseEvent } from "react";

import selectAndCopyText from "@/functions/main-description/selectAndCopyText";

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
    await selectAndCopyText(event);
  }

  if (copy) {
    if (pre) {
      return (
        <pre>
          <em className="copy pre" title="Copy" onClick={handleClick}>
            {children}
          </em>
        </pre>
      );
    } else {
      return (
        <em className="copy" title="Copy" onClick={handleClick}>
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
