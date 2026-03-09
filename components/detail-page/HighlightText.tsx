"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";

interface HighlightTextProps {
  pre?: boolean;
  copy?: boolean;
  underline?: boolean;
  children: string;
}

export default function HighlightText({
  pre = false,
  copy = false,
  underline = false,
  children,
}: HighlightTextProps) {
  const emRef = useRef<HTMLElement>(null);

  async function handleClick() {
    // Copy
    try {
      await navigator.clipboard.writeText(children);
    } catch (error) {
      console.error(`Could not copy to clipboard due to ${error}.`);
      return;
    }

    // Select
    if (!emRef.current) {
      console.error("No emRef");
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(emRef.current);

    const selection = window.getSelection();
    if (!selection) {
      console.error("No selection");
      return;
    }
    selection.removeAllRanges();
    selection.addRange(range);
  }

  if (!pre && !copy && !underline) {
    return <em className={styles.plain}>{children}</em>;
  }

  if (pre) {
    if (copy) {
      return (
        <pre>
          <em
            className={`${styles.pre} ${styles.copy}`}
            title="Copy"
            ref={emRef}
            onClick={handleClick}
          >
            {children}
          </em>
        </pre>
      );
    } else {
      return (
        <pre>
          <em className={styles.pre}>{children}</em>
        </pre>
      );
    }
  }

  if (copy) {
    return (
      <em
        className={styles.copy}
        title="Copy"
        ref={emRef}
        onClick={handleClick}
      >
        {children}
      </em>
    );
  }

  if (underline) {
    return <em className={styles.underline}>{children}</em>;
  }
}
