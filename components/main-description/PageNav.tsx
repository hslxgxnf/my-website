"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

import styles from "@/styles/main-description-&-list/page.module.scss";
import handleClickFirstLink from "@/functions/main-description/handleClickFirstLink";

// if (!shouldRender) return null;
// - No Paint
// useEffect 1
// - set...
// useEffect 2
// - Nothing
// useState, ResizeObserver
// - shouldRender, headings, headerHeight, isScrollable
// if (headings.length === 1) ...
// - Paint
// useEffect 2
// - Intersection Observer

export default function PageNav() {
  const [shouldRender, setShouldRender] = useState(false);
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setShouldRender(true);

    const foundHeadings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(
        "body > main > article :is(h1, h2, h3)",
      ),
    );
    if (foundHeadings.length === 0) {
      console.error("No headings");
      return;
    }
    setHeadings(foundHeadings);

    function updateHeaderHeight() {
      const header = document.querySelector<HTMLElement>("body > header");
      if (!header) {
        console.error("No header");
        return;
      }
      setHeaderHeight(header.getBoundingClientRect().height);
    }
    updateHeaderHeight();

    function updateIsScrollable() {
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;
      setIsScrollable(docHeight > windowHeight);
    }
    updateIsScrollable();

    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
      updateIsScrollable();
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Intersection Observer
  // When an article has two or more headings, the Intersection Observer will be used.
  // The <article> element must be divided into <section> elements.
  useEffect(() => {
    if (
      !shouldRender ||
      headings.length === 1 ||
      headerHeight === 0 ||
      !ulRef.current
    ) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("body > main > article section"),
    );
    if (sections.length === 0) {
      console.error("No sections");
      return;
    }
    if (sections.length !== headings.length) {
      console.error(
        `sections.length: ${sections.length} must be the same as headings.length: ${headings.length}.`,
      );
      return;
    }

    const links = ulRef.current.querySelectorAll<HTMLAnchorElement>("a");
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target as HTMLElement);

          if (entry.isIntersecting) {
            links[index].classList.add(styles.active);
          } else {
            links[index].classList.remove(styles.active);
          }
        });
      },
      {
        rootMargin: `-${Math.floor(headerHeight) + 1}px 0px 0px 0px`,
        threshold: [0, 0.05, 0.95, 1],
      },
    );
    sections.forEach((section) => {
      intersectionObserver.observe(section);
    });

    return () => {
      intersectionObserver.disconnect();
    };
  }, [shouldRender, headings.length, headerHeight]);

  if (!shouldRender) {
    return null;
  }

  if (headings.length === 1) {
    if (isScrollable) {
      return (
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                  });
                }}
              >
                <FaAngleDoubleUp />
              </button>
              <hr />
            </li>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                  });
                }}
              >
                <FaAngleDoubleDown />
              </button>
            </li>
          </ul>
        </nav>
      );
    } else {
      return null;
    }
  } else {
    return (
      <nav>
        <header>On this page</header>
        <main>
          <ul ref={ulRef}>
            {headings.map((heading, index) => {
              const content = heading.firstElementChild!.textContent;
              const href = `#${content.replaceAll(" ", "-").toLowerCase()}`;

              switch (heading.localName) {
                case "h1":
                  return (
                    <li key={index}>
                      <Link
                        href={href}
                        onClick={(event) => handleClickFirstLink(event, href)}
                      >
                        {content}
                      </Link>
                      <hr />
                    </li>
                  );
                case "h2":
                  return (
                    <li key={index}>
                      <Link href={href}>{content}</Link>
                    </li>
                  );
                case "h3":
                  return (
                    <li key={index} className={styles.indent}>
                      <Link href={href}>{content}</Link>
                    </li>
                  );
              }
            })}
            {isScrollable && (
              <li>
                <hr />
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                    });
                  }}
                >
                  <FaAngleDoubleDown />
                </button>
              </li>
            )}
          </ul>
        </main>
      </nav>
    );
  }
}
