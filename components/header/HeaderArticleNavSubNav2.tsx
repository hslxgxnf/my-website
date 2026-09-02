import { type Ref, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { HiMiniArrowTurnDownRight } from "react-icons/hi2";

import type { Path } from "./HeaderArticleNav";

export default function HeaderArticleNavSubNav2({
  ref,
  processedPath,
}: {
  ref: Ref<HTMLButtonElement>;
  processedPath: Path[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <button
        ref={ref}
        className={isOpen ? "open" : undefined}
        onClick={handleClick}
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
