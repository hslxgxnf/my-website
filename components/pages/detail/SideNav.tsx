"use client";

import { Ref, useRef, useLayoutEffect } from "react";

import styles from "@/styles/pages/detail/page.module.css";
import handleClickFirstLink from "@/functions/pages/handleClickFirstLink";

interface SideNavProps {
  articleRef: Ref<HTMLElement>;
}

export default function SideNav({ articleRef }: SideNavProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (typeof articleRef === "function")
      throw new Error("Type Error articleRef");
    if (!articleRef || !articleRef.current) throw new Error("No articleRef");

    // Find existing headings
    const headings: HTMLHeadingElement[] = Array.from(
      articleRef.current.querySelectorAll("h1, h2, h3"),
    );

    // Create right side navigation headings
    headings.forEach((heading) => {
      if (!ulRef.current) throw new Error("No ulRef");

      const tag = heading.localName;
      const text = heading.innerText;
      const url = `#${text.replaceAll(" ", "-").toLowerCase()}`;

      switch (tag) {
        case "h1": {
          const li = document.createElement("li");
          const link = document.createElement("a");
          const hr = document.createElement("hr");
          link.href = url;
          link.innerText = text;
          link.addEventListener("click", (event) =>
            handleClickFirstLink(event, url),
          );
          li.append(link);
          li.append(hr);
          ulRef.current.append(li);
          break;
        }
        case "h2": {
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.href = url;
          link.innerText = text;
          li.append(link);
          ulRef.current.append(li);
          break;
        }
        case "h3": {
          const li = document.createElement("li");
          const link = document.createElement("a");
          li.classList.add(styles.indent);
          link.href = url;
          link.innerText = text;
          li.append(link);
          ulRef.current.append(li);
          break;
        }
      }
    });

    // Intersection Observer API
    if (!ulRef.current) throw new Error("No ulRef");

    const sections = Array.from(articleRef.current.querySelectorAll("section"));
    const links = Array.from(ulRef.current.querySelectorAll("a"));

    const options = {
      rootMargin: "-160px 0px 0px 0px",
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
  });

  return (
    <nav>
      <header>On this page</header>
      <main>
        <ul ref={ulRef}></ul>
      </main>
    </nav>
  );
}
