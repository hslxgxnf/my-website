"use client";

import { type ReactNode, useState } from "react";

import styles from "@/styles/main-description-&-list/page.module.scss";

interface ToggleListProps {
  header: ReactNode;
  children: ReactNode;
}

export default function ToggleList({ header, children }: ToggleListProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <li className={styles["toggle-list"]}>
      <div className={isOpen ? styles.open : ""} onClick={handleClick}>
        ▶
      </div>
      <header>{header}</header>
      <main>{children}</main>
    </li>
  );
}
