"use client";

import type { MouseEvent } from "react";

import styles from "@/styles/main-description-&-list/page.module.scss";
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
          <em
            className={`${styles.copy} ${styles.pre}`}
            title="Copy"
            onClick={handleClick}
          >
            {children}
          </em>
        </pre>
      );
    } else {
      return (
        <em className={styles.copy} title="Copy" onClick={handleClick}>
          {children}
        </em>
      );
    }
  } else {
    if (pre) {
      return (
        <pre>
          <em className={styles.pre}>{children}</em>
        </pre>
      );
    } else {
      return <em className={styles.plain}>{children}</em>;
    }
  }
}
