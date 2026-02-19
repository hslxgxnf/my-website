"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

interface Path {
  href: string;
  name: string;
}

const upperCaseWords: string[] = ["ide", "dsa", "ai"];

export default function HeaderPath() {
  const path = usePathname();

  if (!path) throw new Error("No path");

  const slicedPath: string[] = path.slice(1).split("/");
  const processedPath: Array<Path> = [];

  for (let i = 0; i < slicedPath.length; i++) {
    let href = "";
    for (let j = 0; j < i + 1; j++) {
      href = `${href}/${slicedPath[j]}`;
    }

    // Convert a lowercase name to an uppercase or title case
    let name = "";
    if (upperCaseWords.includes(slicedPath[i])) {
      name = slicedPath[i].toUpperCase();
    } else {
      name = slicedPath[i]
        .split("-")
        .map((word) => {
          if (upperCaseWords.includes(word)) {
            return word.toUpperCase();
          } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
        })
        .join(" ");
    }

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
              <Link href={item.href}>{item.name}</Link>
              &nbsp;
              <FaCaretRight />
              &nbsp;
            </li>
          );
        } else {
          return <li key={index}>{item.name}</li>;
        }
      })}
    </ul>
  );
}
