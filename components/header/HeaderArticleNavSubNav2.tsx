import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { HiMiniArrowTurnDownRight } from "react-icons/hi2";

import { useStore } from "@/stores/useStore";

import type { Path } from "./HeaderArticleNav";

export default function HeaderArticleNavSubNav2({
  processedPath,
}: {
  processedPath: Path[];
}) {
  const isPathOverflow = useStore((state) => state.isPathOverflow);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Dropdown breadcrumb navigation"
      className={isPathOverflow ? "overflow" : undefined}
    >
      <button
        type="button"
        aria-label="Toggle dropdown breadcrumb navigation"
        aria-controls="dropdown-breadcrumb-navigation"
        aria-expanded={isOpen}
        className={isOpen ? "open" : undefined}
        disabled={!isPathOverflow}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaChevronUp aria-hidden="true" />
      </button>

      <ol
        id="dropdown-breadcrumb-navigation"
        className={isOpen ? "open" : undefined}
      >
        {processedPath.map((item, index) => {
          if (index !== processedPath.length - 1) {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <HiMiniArrowTurnDownRight aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <HiMiniArrowTurnDownRight aria-hidden="true" />
                <span aria-current="page">{item.name}</span>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
