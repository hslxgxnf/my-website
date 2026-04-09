"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import styles from "@/styles/detail-page/page.module.css";
import handleClickFirstLink from "@/functions/detail-page/handleClickFirstLink";

export default function PageNav2() {
  const [shouldRender, setShouldRender] = useState(false);
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const foundHeadings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(
        "body > main > article :is(h1, h2, h3)",
      ),
    );

    // When an article has two or more headings, this component will be displayed.
    if (foundHeadings.length === 0) {
      throw new Error("No headings");
    } else if (foundHeadings.length >= 2) {
      setShouldRender(true);
      setHeadings(foundHeadings);
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (shouldRender && ulRef.current) {
      // To use this component, the <article> element must be divided into <section> elements.
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("body > main > article section"),
      );
      if (sections.length === 0) throw new Error("No sections");
      if (headings.length !== sections.length)
        throw new Error(
          `sections.length: ${sections.length} must be the same as headings.length: ${headings.length}.`,
        );

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

  return (
    <nav>
      <header>On this page</header>
      <main>
        <ul ref={ulRef}>
          {headings!.map((heading, index) => {
            const content = heading.firstElementChild!.textContent;
            const url = `#${content.replaceAll(" ", "-").toLowerCase()}`;

            switch (heading.localName) {
              case "h1":
                return (
                  <li key={index}>
                    <Link
                      href={url}
                      onClick={(event) => handleClickFirstLink(event, url)}
                    >
                      {content}
                    </Link>
                    <hr />
                  </li>
                );
              case "h2":
                return (
                  <li key={index}>
                    <Link href={url}>{content}</Link>
                  </li>
                );
              case "h3":
                return (
                  <li key={index} className={styles.indent}>
                    <Link href={url}>{content}</Link>
                  </li>
                );
            }
          })}
        </ul>
      </main>
    </nav>
  );
}
