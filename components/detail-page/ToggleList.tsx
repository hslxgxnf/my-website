"use client";

import { type ReactNode, useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";

interface ToggleListProps {
  header: ReactNode;
  children: ReactNode;
}

export default function ToggleList({ header, children }: ToggleListProps) {
  const divRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (!divRef.current) throw new Error("No divRef");
    divRef.current.classList.toggle(styles.open);
  }

  return (
    <li className={styles["toggle-list"]}>
      <div ref={divRef} onClick={handleClick}>
        ▶
      </div>
      <header>{header}</header>
      <main>{children}</main>
    </li>
  );
}
