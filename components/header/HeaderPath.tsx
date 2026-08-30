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

  const referenceNavButtonRef = useRef<HTMLButtonElement>(null);
  function handleReferenceNavButtonClick() {
    if (!referenceNavButtonRef.current) {
      console.error("No referenceNavButtonRef");
      return;
    }

    referenceNavButtonRef.current.classList.toggle("open");

    const referenceNav = document.querySelector<HTMLDivElement>(
      "body > main > aside:first-child > div",
    );
    if (!referenceNav) {
      console.error("No referenceNav");
      return;
    }
    referenceNav.classList.toggle("open");
  }

  const pageNavButtonRef = useRef<HTMLButtonElement>(null);
  function handlePageNavButtonClick() {
    if (!pageNavButtonRef.current) {
      console.error("No pageNavButtonRef");
      return;
    }

    pageNavButtonRef.current.classList.toggle("open");

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
    if (!referenceNavButtonRef.current) {
      console.error("No referenceNavButtonRef");
      return;
    }
    if (!pageNavButtonRef.current) {
      console.error("No pageNavButtonRef");
      return;
    }
    referenceNavButtonRef.current.className = "";
    pageNavButtonRef.current.className = "";

    // Check if ReferenceNav and PageNav exist.
    const referenceNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:first-child",
    );
    if (!referenceNavParent) {
      console.error("No referenceNavParent");
      return;
    }
    if (referenceNavParent.children.length === 0) {
      referenceNavButtonRef.current.classList.remove("active");
      referenceNavButtonRef.current.disabled = true;
    } else {
      referenceNavButtonRef.current.classList.add("active");
      referenceNavButtonRef.current.disabled = false;
    }

    const pageNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:last-child",
    );
    if (!pageNavParent) {
      console.error("No pageNavParent");
      return;
    }
    const checkChildren = () => {
      if (!pageNavButtonRef.current) {
        console.error("No pageNavButtonRef");
        return;
      }

      if (pageNavParent.children.length === 0) {
        pageNavButtonRef.current.classList.remove("active");
        pageNavButtonRef.current.disabled = true;
      } else {
        pageNavButtonRef.current.classList.add("active");
        pageNavButtonRef.current.disabled = false;
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

        <div>
          <button
            ref={referenceNavButtonRef}
            onClick={handleReferenceNavButtonClick}
          >
            <FaChevronUp />
          </button>
          <button ref={pageNavButtonRef} onClick={handlePageNavButtonClick}>
            <FaChevronUp />
          </button>
        </div>
      </main>
    </nav>
  );
}
