"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

import changeToTitleCase from "@/functions/changeToTitleCase";

interface Path {
  href: string;
  name: string;
}

export default function HeaderPath() {
  const path = usePathname();

  const slicedPath: string[] = path.slice(1).split("/");
  const processedPath: Path[] = [];

  for (let i = 0; i < slicedPath.length; i++) {
    let href = "";
    for (let j = 0; j < i + 1; j++) {
      href = `${href}/${slicedPath[j]}`;
    }

    const name = changeToTitleCase(slicedPath[i]);

    processedPath.push({
      href,
      name,
    });
  }

  return (
    <ul>
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
