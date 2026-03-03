"use client";

import { Ref, useRef, useLayoutEffect } from "react";
import Link from "next/link";

import styles from "@/styles/detail-page/page.module.css";
import { Headings } from "@/types/detail-page/interfaces";
import handleClickFirstLink from "@/functions/detail-page/handleClickFirstLink";

interface SideNavProps {
  articleRef: Ref<HTMLElement>;
  headings: Headings;
}

// To use this component, the <article> element must be divided into <section> elements.
export default function PageNav({ articleRef, headings }: SideNavProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  // headings Guard
  useLayoutEffect(() => {
    if (typeof articleRef === "function")
      throw new Error("Type Error articleRef");
    if (!articleRef || !articleRef.current) throw new Error("No articleRef");

    const articleHeadings: HTMLHeadingElement[] = Array.from(
      articleRef.current.querySelectorAll("h1, h2, h3"),
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
  }, [articleRef, headings]);

  // Intersection Observer API
  useLayoutEffect(() => {
    if (typeof articleRef === "function")
      throw new Error("Type Error articleRef");
    if (!articleRef || !articleRef.current) throw new Error("No articleRef");

    if (!ulRef.current) throw new Error("No ulRef");
    const sections = Array.from(articleRef.current.querySelectorAll("section"));
    const links = Array.from(ulRef.current.querySelectorAll("a"));

    const header = document.querySelector("header") as HTMLElement;
    const headerHeight = header.getBoundingClientRect().height + 1;
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

    return () => {
      observer.disconnect();
    };
  }, [articleRef]);

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
