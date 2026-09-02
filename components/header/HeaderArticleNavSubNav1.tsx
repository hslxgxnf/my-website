import { type Ref } from "react";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

import type { Path } from "./HeaderArticleNav";

export default function HeaderArticleNavSubNav1({
  ref,
  path,
  processedPath,
}: {
  ref: Ref<HTMLUListElement>;
  path: string;
  processedPath: Path[];
}) {
  // Check active.
  const isActive = path !== "/";

  return (
    <ul ref={ref} className={isActive ? "active" : undefined}>
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
