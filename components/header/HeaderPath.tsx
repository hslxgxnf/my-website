"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCaretRight, FaChevronUp } from "react-icons/fa";

import toTitleCase from "@/functions/all/toTitleCase";
import { useEffect, useRef } from "react";

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

    const name = toTitleCase(slicedPath[i]);

    processedPath.push({
      href,
      name,
    });
  }

  const buttonRef = useRef<HTMLButtonElement>(null);
  function handleClick() {
    if (!buttonRef.current) {
      console.error("No buttonRef");
      return;
    }

    buttonRef.current.classList.toggle("open");

    const pageNav = document.querySelector<HTMLDivElement>(
      "body > main > aside:last-child > div",
    );
    if (!pageNav) {
      console.error("No pageNav");
      return;
    }
    pageNav.classList.toggle("open");
  }

  useEffect(() => {
    // Reset the class attribute after page transition.
    if (!buttonRef.current) {
      console.error("No buttonRef");
      return;
    }
    buttonRef.current.className = "";

    const pageNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:last-child",
    );
    if (!pageNavParent) {
      console.error("No pageNavParent");
      return;
    }

    const checkChildren = () => {
      if (!buttonRef.current) {
        console.error("No buttonRef");
        return;
      }

      if (pageNavParent.children.length === 0) {
        buttonRef.current.classList.remove("active");
      } else {
        buttonRef.current.classList.add("active");
      }
    };
    checkChildren();

    const observer = new MutationObserver(() => {
      checkChildren();
    });
    observer.observe(pageNavParent, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [path]);

  return (
    <nav>
      <aside></aside>
      <main>
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

        <button ref={buttonRef} onClick={handleClick}>
          <FaChevronUp />
        </button>
      </main>
    </nav>
  );
}
