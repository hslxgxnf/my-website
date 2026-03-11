"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import copyText from "@/functions/detail-page/copyText";
import selectText from "@/functions/detail-page/selectText";

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
  const emRef = useRef<HTMLElement>(null);

  function handleClick() {
    void copyText(children);
    selectText(emRef);
  }

  if (copy) {
    if (pre) {
      return (
        <pre>
          <em
            className={`${styles.copy} ${styles.pre}`}
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
