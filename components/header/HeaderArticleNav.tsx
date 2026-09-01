"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCaretRight, FaChevronUp } from "react-icons/fa";
import { HiMiniArrowTurnDownRight } from "react-icons/hi2";

import toTitleCase from "@/functions/all/toTitleCase";
import { useRef, useLayoutEffect } from "react";

interface Path {
  href: string;
  name: string;
}

export default function HeaderArticleNav() {
  // Button Click Handlers
  const pathHistoryButtonRef = useRef<HTMLButtonElement>(null);
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

  const referenceNavButtonRef = useRef<HTMLButtonElement>(null);
  function handleReferenceNavButtonClick() {
    const referenceNavButton = referenceNavButtonRef.current;
    if (!referenceNavButton) {
      console.error("No referenceNavButton");
      return;
    }
    referenceNavButton.classList.toggle("open");

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
    const pageNavButton = pageNavButtonRef.current;
    if (!pageNavButton) {
      console.error("No pageNavButton");
      return;
    }
    pageNavButton.classList.toggle("open");

    const pageNav = document.querySelector<HTMLDivElement>(
      "body > main > aside:last-child > div",
    );
    if (!pageNav) {
      console.error("No pageNav");
      return;
    }
    pageNav.classList.toggle("open");
  }

  const pathHistoryRef = useRef<HTMLUListElement>(null);

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
    const referenceNavButton = referenceNavButtonRef.current;
    if (!referenceNavButton) {
      console.error("No referenceNavButton");
      return;
    }
    const pageNavButton = pageNavButtonRef.current;
    if (!pageNavButton) {
      console.error("No pageNavButton");
      return;
    }
    pathHistoryButton.className = "";
    pathHistoryMenu.className = "";
    referenceNavButton.className = "";
    pageNavButton.className = "";

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

    const referenceNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:first-child",
    );
    if (!referenceNavParent) {
      console.error("No referenceNavParent");
      return;
    }
    if (referenceNavParent.children.length === 0) {
      referenceNavButton.classList.remove("active");
      referenceNavButton.disabled = true;
    } else {
      referenceNavButton.classList.add("active");
      referenceNavButton.disabled = false;
    }

    const pageNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:last-child",
    );
    if (!pageNavParent) {
      console.error("No pageNavParent");
      return;
    }
    const checkChildren = () => {
      if (pageNavParent.children.length === 0) {
        pageNavButton.classList.remove("active");
        pageNavButton.disabled = true;
      } else {
        pageNavButton.classList.add("active");
        pageNavButton.disabled = false;
      }
    };
    checkChildren();
    const mutationObserver = new MutationObserver(() => {
      checkChildren();
    });
    mutationObserver.observe(pageNavParent, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, [path]);

  useLayoutEffect(() => {
    // Check overflow.
    const pathHistory = pathHistoryRef.current;
    if (!pathHistory) {
      console.error("No pathHistory");
      return;
    }
    const pathHistoryButton = pathHistoryButtonRef.current;
    if (!pathHistoryButton) {
      console.error("No pathHistoryButton");
      return;
    }

    const main = pathHistory.parentElement!;
    const buttons = pathHistory.nextElementSibling!.nextElementSibling!;
    const fixedWidth =
      parseFloat(window.getComputedStyle(main).gap) +
      buttons.getBoundingClientRect().width;
    const pathHistoryWidth = pathHistory.scrollWidth;

    const checkOverflow = () => {
      const mainWidth =
        main.getBoundingClientRect().width -
        parseFloat(window.getComputedStyle(main).paddingLeft) -
        parseFloat(window.getComputedStyle(main).paddingRight);

      const isOverflow = pathHistoryWidth + fixedWidth > mainWidth;

      if (isOverflow) {
        pathHistory.classList.add("overflow");
        pathHistoryButton.parentElement!.classList.add("overflow");
      } else {
        pathHistory.classList.remove("overflow");
        pathHistoryButton.classList.remove("overflow");
        pathHistoryButton.parentElement!.classList.remove("overflow");
      }
    };
    checkOverflow();
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    resizeObserver.observe(main);

    return () => {
      resizeObserver.disconnect();
    };
  }, [path]);

  return (
    <nav>
      <div></div>

      <div>
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

        <div>
          <button
            ref={pathHistoryButtonRef}
            onClick={handlePathHistoryButtonClick}
          >
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
      </div>
    </nav>
  );
}
