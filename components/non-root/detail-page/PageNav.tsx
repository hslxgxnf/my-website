"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import handleClickFirstLink from "@/functions/non-root/detail-page/handleClickFirstLink";

export default function PageNav() {
  const [shouldRender, setShouldRender] = useState(false);
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const ulRef = useRef<HTMLUListElement>(null);

  // Flow 2
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

  // Flow 3
  // Flow 5 (Run after setShouldRender(true))
  // Intersection Observer
  useEffect(() => {
    if (shouldRender && ulRef.current) {
      // The <article> element must be divided into <section> elements.
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("body > main > article section"),
      );
      if (sections.length === 0) throw new Error("No sections");
      if (sections.length !== headings.length)
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

  // Flow 1
  if (!shouldRender) return null;

  // Flow 4 (Run after setShouldRender(true))
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
        </ul>
      </main>
    </nav>
  );
}
