"use client";

import { type ReactNode, useState } from "react";

interface ToggleListProps {
  summary: ReactNode;
  children: ReactNode;
}

export default function ToggleList({ summary, children }: ToggleListProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <li className="toggle-list">
      <div className={isOpen ? "open" : undefined} onClick={handleClick}>
        ▶
      </div>
      <div>{summary}</div>
      <div>{children}</div>
    </li>
  );
}
