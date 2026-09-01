import { type RefObject, useRef, useLayoutEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { HiMiniArrowTurnDownRight } from "react-icons/hi2";

import type { Path } from "./HeaderArticleNav";

export default function HeaderArticleNavSubNav2({
  pathHistoryButtonRef,

  path,
  processedPath,
}: {
  pathHistoryButtonRef: RefObject<HTMLButtonElement | null>;
  path: string;
  processedPath: Path[];
}) {
  const pathHistoryMenuRef = useRef<HTMLUListElement>(null);

  function handlePathHistoryButtonClick() {
    const pathHistoryButton = pathHistoryButtonRef.current;
    if (!pathHistoryButton) {
      console.error("No pathHistoryButton");
      return;
    }
    pathHistoryButton.classList.toggle("open");

    const pathHistoryMenu = pathHistoryMenuRef.current;
    if (!pathHistoryMenu) {
      console.error("No pathHistoryMenu");
      return;
    }
    pathHistoryMenu.classList.toggle("open");
  }

  useLayoutEffect(() => {
    // Reset the settings from the previous page.
    const pathHistoryButton = pathHistoryButtonRef.current;
    if (!pathHistoryButton) {
      console.error("No pathHistoryButton");
      return;
    }
    const pathHistoryMenu = pathHistoryMenuRef.current;
    if (!pathHistoryMenu) {
      console.error("No pathHistoryMenu");
      return;
    }

    pathHistoryButton.className = "";
    pathHistoryMenu.className = "";
  }, [path]);

  return (
    <div>
      <button ref={pathHistoryButtonRef} onClick={handlePathHistoryButtonClick}>
        <FaChevronUp />
      </button>

      <ul ref={pathHistoryMenuRef}>
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
