"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

import styles from "@/styles/main-description-&-list/page.module.scss";
import handleClickFirstLink from "@/functions/main-description/handleClickFirstLink";

// if (!shouldRender) return null;
// - Nothing
// useEffect 1
// - set...
// useEffect 2
// - Nothing
// useState
// - shouldRender: true
// if (headings.length === 1) ...
// - Page Navigation
// useEffect 2
// - Intersection Observer

export default function PageNav() {
  const [shouldRender, setShouldRender] = useState(false);
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const [isScrollable, setIsScrollable] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const foundHeadings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(
        "body > main > article :is(h1, h2, h3)",
      ),
    );

    if (foundHeadings.length === 0) {
      console.error("No headings");
    } else if (foundHeadings.length >= 1) {
      setShouldRender(true);
      setHeadings(foundHeadings);

      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;
      const isScrollable = docHeight > windowHeight;
      setIsScrollable(isScrollable);
    }
  }, []);

  // Intersection Observer
  // When an article has two or more headings, the Intersection Observer will be used.
  // The <article> element must be divided into <section> elements.
  useEffect(() => {
    if (shouldRender && headings.length >= 2 && ulRef.current) {
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

      const headerHeight =
        document
          .querySelector<HTMLElement>("body > header")!
          .getBoundingClientRect().height + 1;
      const options = {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target as HTMLElement);

          if (entry.isIntersecting) {
            links[index].classList.add(styles.active);
          } else {
            links[index].classList.remove(styles.active);
          }
        });
      }, options);

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    }
  }, [shouldRender, headings.length]);

  if (!shouldRender) return null;

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
            {headings!.map((heading, index) => {
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
