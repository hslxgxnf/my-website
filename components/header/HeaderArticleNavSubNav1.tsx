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
  const isActive = path !== "/";
  const isPathOverflow = useStore((state) => state.isPathOverflow);

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`${isActive ? "active" : ""} ${isPathOverflow ? "overflow" : ""}`.trim()}
    >
      <ol>
        {processedPath.map((item, index) => {
          if (index !== processedPath.length - 1) {
            return (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>{" "}
                <FaCaretRight aria-hidden="true" />
              </li>
            );
          } else {
            return (
              <li key={index}>
                <span aria-current="page">{item.name}</span>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
