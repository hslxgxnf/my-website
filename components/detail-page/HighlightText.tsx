"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import copyText from "@/functions/detail-page/copyText";
import selectText from "@/functions/detail-page/selectText";

interface HighlightTextProps {
  pre?: boolean;
  copy?: boolean;
  underline?: boolean;
  children: string;
}

export default function HighlightText({
  pre,
  copy,
  underline,
  children,
}: HighlightTextProps) {
  const emRef = useRef<HTMLElement>(null);

  function handleClick() {
    void copyText(children);
    selectText(emRef);
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
