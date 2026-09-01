import { type RefObject, useLayoutEffect } from "react";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

import type { Path } from "./HeaderArticleNav";

export default function HeaderArticleNavSubNav1({
  pathHistoryRef,
  path,
  processedPath,
}: {
  pathHistoryRef: RefObject<HTMLUListElement | null>;
  path: string;
  processedPath: Path[];
}) {
  useLayoutEffect(() => {
    // Check active.
    const pathHistory = pathHistoryRef.current;
    if (!pathHistory) {
      console.error("No pathHistory");
      return;
    }
    if (path === "/") {
      pathHistory.classList.remove("active");
    } else {
      pathHistory.classList.add("active");
    }
  }, [path]);

  return (
    <ul ref={pathHistoryRef}>
      {processedPath.map((item, index) => {
        if (index !== processedPath.length - 1) {
          return (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link> <FaCaretRight />
            </li>
          );
        } else {
          return <li key={index}>{item.name}</li>;
        }
      })}
    </ul>
  );
}
