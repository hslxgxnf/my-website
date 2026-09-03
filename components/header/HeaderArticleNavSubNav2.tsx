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
    <div className={isPathOverflow ? "overflow" : undefined}>
      <button
        className={isOpen ? "open" : undefined}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaChevronUp />
      </button>

      <ul className={isOpen ? "open" : undefined}>
        {processedPath.map((item, index) => {
          if (index !== processedPath.length - 1) {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <HiMiniArrowTurnDownRight />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <HiMiniArrowTurnDownRight />
                <span>{item.name}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
