"use client";

import { type ReactNode, useId, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

interface ToggleListProps {
  summary: ReactNode;
  content: ReactNode;
}

export default function ToggleList({ summary, content }: ToggleListProps) {
  const summaryId = useId();
  const contentId = useId();

  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <li className="toggle-list">
      <button
        type="button"
        aria-labelledby={summaryId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        className={isOpen ? "open" : undefined}
        onClick={handleClick}
      >
        <BiSolidRightArrow aria-hidden="true" />
      </button>
      <div id={summaryId}>{summary}</div>
      <div id={contentId}>{content}</div>
    </li>
  );
}
