"use client";

import type { MouseEvent } from "react";

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
    await selectAndCopyText(event);
  }

  if (copy) {
    if (pre) {
      return (
        <pre>
          <code className="copy pre" title="Copy" onClick={handleClick}>
            {children}
          </code>
        </pre>
      );
    } else {
      return (
        <code className="copy" title="Copy" onClick={handleClick}>
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
