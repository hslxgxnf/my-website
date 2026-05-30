"use client";

import { type ReactNode, useRef } from "react";

import styles from "@/styles/main-description-&-list/page.module.scss";

interface ToggleListProps {
  header: ReactNode;
  children: ReactNode;
}

export default function ToggleList({ header, children }: ToggleListProps) {
  const divRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (!divRef.current) {
      console.error("No divRef");
      return;
    }
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
