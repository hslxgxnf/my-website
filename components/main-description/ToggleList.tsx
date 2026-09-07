"use client";

import { type ReactNode, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

interface ToggleListProps {
  id: string;
  summary: ReactNode;
  children: ReactNode;
}

export default function ToggleList({ id, summary, children }: ToggleListProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <li className="toggle-list">
      <button
        type="button"
        aria-label={`Toggle ${id}`}
        aria-controls={id}
        aria-expanded={isOpen}
        className={isOpen ? "open" : undefined}
        onClick={handleClick}
      >
        <BiSolidRightArrow aria-hidden="true" />
      </button>
      <div>{summary}</div>
      <div id={id}>{children}</div>
    </li>
  );
}
