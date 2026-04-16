"use client";

import { useRef } from "react";

import styles from "@/styles/main-description-&-list/page.module.scss";
import copyText from "@/functions/main-description/copyText";
import selectText from "@/functions/main-description/selectText";

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
  const codeRef = useRef<HTMLElement>(null);

  function handleClick() {
    void copyText(children);
    selectText(codeRef);
  }

  if (copy) {
    if (pre) {
      return (
        <pre>
          <code
            className={`${styles.copy} ${styles.pre}`}
            title="Copy"
            ref={codeRef}
            onClick={handleClick}
          >
            {children}
          </code>
        </pre>
      );
    } else {
      return (
        <code
          className={styles.copy}
          title="Copy"
          ref={codeRef}
          onClick={handleClick}
        >
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
