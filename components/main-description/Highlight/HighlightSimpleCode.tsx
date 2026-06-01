"use client";

import { type MouseEvent } from "react";

import styles from "@/styles/main-description-&-list/page.module.scss";
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
          <code
            className={`${styles.copy} ${styles.pre}`}
            title="Copy"
            onClick={handleClick}
          >
            {children}
          </code>
        </pre>
      );
    } else {
      return (
        <code className={styles.copy} title="Copy" onClick={handleClick}>
          {children}
        </code>
      );
    }
  } else {
    if (pre) {
      return (
        <pre>
          <code className={styles.pre}>{children}</code>
        </pre>
      );
    } else {
      return <code className={styles.plain}>{children}</code>;
    }
  }
}
