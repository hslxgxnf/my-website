"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import copyText from "@/functions/detail-page/copyText";
import selectText from "@/functions/detail-page/selectText";

interface HighlightCodeSimpleProps {
  copy?: boolean;
  children: string;
}

export default function HighlightCodeSimple({
  copy,
  children,
}: HighlightCodeSimpleProps) {
  const codeRef = useRef<HTMLElement>(null);

  function handleClick() {
    void copyText(children);
    selectText(codeRef);
  }

  if (copy) {
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

  return <code className={styles.plain}>{children}</code>;
}
