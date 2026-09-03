import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

import { useStore } from "@/stores/useStore";

import type { Path } from "./HeaderArticleNav";

export default function HeaderArticleNavSubNav1({
  path,
  processedPath,
}: {
  path: string;
  processedPath: Path[];
}) {
  // Check active.
  const isActive = path !== "/";
  const isPathOverflow = useStore((state) => state.isPathOverflow);

  return (
    <ul
      className={`${isActive ? "active" : ""} ${isPathOverflow ? "overflow" : ""}`.trim()}
    >
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
