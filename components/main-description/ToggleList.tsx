"use client";

import { type ReactNode, useState } from "react";

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
    <li className="toggle-list">
      <div className={isOpen ? "open" : undefined} onClick={handleClick}>
        ▶
      </div>
      <header>{header}</header>
      <main>{children}</main>
    </li>
  );
}
