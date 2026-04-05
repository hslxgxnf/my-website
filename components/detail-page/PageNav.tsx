"use client";

import { useRef, useState, JSX, useEffect } from "react";
import Link from "next/link";

import styles from "@/styles/detail-page/page.module.css";
import handleClickFirstLink from "@/functions/detail-page/handleClickFirstLink";

export default function PageNav() {
  const navRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [links, setLinks] = useState<(JSX.Element | undefined)[]>();

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("body > main > article :is(h1, h2, h3)"),
    );

    // When an article has two or more headings, this component will be displayed.
    if (headings.length === 1) {
      if (!navRef.current) throw new Error("No navRef");
      navRef.current.remove();
      return;
    }

    if (!navRef.current) throw new Error("No navRef");
    navRef.current.style.display = "block";

    const newLinks = headings.map((heading, index) => {
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
    });

    setLinks(newLinks);
  }, []);

  // Intersection Observer API
  useEffect(() => {
    if (!links) return;

    // To use this component, the <article> element must be divided into <section> elements.
    const sections = Array.from(
      document.querySelectorAll("body > main > article section"),
    );
    if (sections.length === 0) throw new Error("No sections");
    if (links.length !== sections.length)
      throw new Error(
        `A mismatched length was found: ${sections.length}. Change to ${links.length}.`,
      );

    if (!ulRef.current) throw new Error("No ulRef");
    const newLinks = ulRef.current.querySelectorAll("a");

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
          newLinks[index].classList.add(styles.active);
        } else {
          newLinks[index].classList.remove(styles.active);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (
    <nav ref={navRef}>
      <header>On this page</header>
      <main>
        <ul ref={ulRef}>{links}</ul>
      </main>
    </nav>
  );
}
