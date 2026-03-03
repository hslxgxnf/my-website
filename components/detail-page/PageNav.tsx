"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";

import styles from "@/styles/detail-page/page.module.css";
import { Headings } from "@/types/detail-page/interfaces";
import handleClickFirstLink from "@/functions/detail-page/handleClickFirstLink";

interface SideNavProps {
  headings: Headings;
}

// To use this component, the <article> element must be divided into <section> elements.
export default function PageNav({ headings }: SideNavProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  // headings Guard
  useLayoutEffect(() => {
    const articleHeadings: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll("body > main > article :is(h1, h2, h3)"),
    );

    if (articleHeadings.length !== headings.length) {
      throw new Error(
        `A mismatched length was found: ${headings.length} -> Change to ${articleHeadings.length}`,
      );
    }

    for (let i = 0; i < articleHeadings.length; ++i) {
      if (articleHeadings[i].localName !== headings[i].tag) {
        throw new Error(
          `A mismatched tag was found: ${headings[i].tag} -> Change to ${articleHeadings[i].localName}`,
        );
      }

      if (articleHeadings[i].innerText !== headings[i].content) {
        throw new Error(
          `A mismatched content was found: ${headings[i].content} -> Change to ${articleHeadings[i].innerText}`,
        );
      }
    }
  }, [headings]);

  // Intersection Observer API
  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("body > main > article section"),
    );
    if (!ulRef.current) throw new Error("No ulRef");
    const links = Array.from(ulRef.current.querySelectorAll("a"));

    const headerHeight =
      document.querySelector("body > header")!.getBoundingClientRect().height +
      1;
    const options = {
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = sections.indexOf(entry.target);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <header>On this page</header>
      <main>
        <ul ref={ulRef}>
          {headings.map((heading, index) => {
            const url = `#${heading.content.replaceAll(" ", "-").toLowerCase()}`;

            switch (heading.tag) {
              case "h1":
                return (
                  <li key={index}>
                    <Link
                      href={url}
                      onClick={(event) => handleClickFirstLink(event, url)}
                    >
                      {heading.content}
                    </Link>
                    <hr />
                  </li>
                );
              case "h2":
                return (
                  <li key={index}>
                    <Link href={url}>{heading.content}</Link>
                  </li>
                );
              case "h3":
                return (
                  <li key={index} className={styles.indent}>
                    <Link href={url}>{heading.content}</Link>
                  </li>
                );
            }
          })}
        </ul>
      </main>
    </nav>
  );
}
