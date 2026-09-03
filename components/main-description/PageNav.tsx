"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

import handleClickFirstLink from "@/functions/main-description/handleClickFirstLink";

import { useStore } from "@/stores/useStore";

export default function PageNav() {
  // ResizeObserver isScrollable
  const [isScrollable, setIsScrollable] = useState(false);
  useLayoutEffect(() => {
    function updateIsScrollable() {
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;
      setIsScrollable(docHeight > windowHeight);
    }

    const resizeObserver = new ResizeObserver(() => {
      updateIsScrollable();
    });

    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // setPageNavBtnActive
  const articleHeadings = useStore((state) => state.articleHeadings);
  const setPageNavBtnActive = useStore((state) => state.setPageNavBtnActive);
  useLayoutEffect(() => {
    if (articleHeadings.length === 0) {
      setPageNavBtnActive(false);
    } else if (articleHeadings.length === 1) {
      if (isScrollable) {
        setPageNavBtnActive(true);
      } else {
        setPageNavBtnActive(false);
      }
    } else {
      setPageNavBtnActive(true);
    }
  }, [articleHeadings, isScrollable, setPageNavBtnActive]);

  // IntersectionObserver <section> <-> PageNav
  const olRef = useRef<HTMLOListElement>(null);
  const headerHeight = useStore((state) => state.headerHeight);
  useLayoutEffect(() => {
    // Need at least 2 articleHeadings.
    if (articleHeadings.length <= 1) {
      return;
    }

    // Guard pre-updated articleHeadings by using realHeadings.
    const realHeadings = Array.from(
      document.querySelectorAll<HTMLElement>(
        "body > main > article :is(h1, h2, h3)",
      ),
    );
    if (articleHeadings.length !== realHeadings.length) {
      return;
    }
    const success = realHeadings.every((heading, index) => {
      const realHeading = heading.firstElementChild!.textContent;
      return realHeading === articleHeadings[index].content;
    });
    if (!success) {
      return;
    }

    // IntersectionObserver
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("body > main > article section"),
    );
    if (sections.length === 0) {
      console.error("No sections");
      return;
    }
    if (sections.length !== articleHeadings.length) {
      console.error(
        `sections.length: ${sections.length} must be the same as articleHeadings.length: ${articleHeadings.length}.`,
      );
      return;
    }

    if (!olRef.current) {
      console.error("No olRef.current");
      return;
    }
    const links = olRef.current.querySelectorAll<HTMLAnchorElement>("a");
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target as HTMLElement);

          if (entry.isIntersecting) {
            links[index].classList.add("active");
          } else {
            links[index].classList.remove("active");
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
  }, [articleHeadings, headerHeight]);

  const isPageNavBtnOpen = useStore((state) => state.isPageNavBtnOpen);
  if (articleHeadings.length === 0) {
    return null;
  } else if (articleHeadings.length === 1) {
    if (isScrollable) {
      return (
        <aside>
          <nav
            aria-label="Page navigation"
            id="page-navigation"
            className={isPageNavBtnOpen ? "open" : undefined}
          >
            <ol className="single">
              <li>
                <button
                  type="button"
                  aria-label="Scroll to top"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                    });
                  }}
                >
                  <FaAngleDoubleUp aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="Scroll to bottom"
                  onClick={() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                    });
                  }}
                >
                  <FaAngleDoubleDown aria-hidden="true" />
                </button>
              </li>
            </ol>
          </nav>
        </aside>
      );
    } else {
      return null;
    }
  } else {
    return (
      <aside>
        <nav
          aria-label="Page navigation"
          id="page-navigation"
          className={isPageNavBtnOpen ? "open" : undefined}
        >
          <h2>On this page</h2>
          <ol ref={olRef} className="multi">
            {articleHeadings.map((heading, index) => {
              const href = `#${heading.content.replaceAll(" ", "-").toLowerCase()}`;

              return (
                <li
                  key={index}
                  className={heading.tag === "h3" ? "indent" : undefined}
                >
                  <Link
                    href={href}
                    onClick={
                      heading.tag === "h1"
                        ? (e) => handleClickFirstLink(e, href)
                        : undefined
                    }
                  >
                    {heading.content}
                  </Link>
                </li>
              );
            })}
            {isScrollable && (
              <li>
                <button
                  type="button"
                  aria-label="Scroll to bottom"
                  onClick={() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                    });
                  }}
                >
                  <FaAngleDoubleDown aria-hidden="true" />
                </button>
              </li>
            )}
          </ol>
        </nav>
      </aside>
    );
  }
}
