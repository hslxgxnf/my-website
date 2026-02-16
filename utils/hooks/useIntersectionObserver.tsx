"use client";

import { useRef, useEffect } from "react";

import styles from "@/app-details/clean-code/Main.module.css";

export default function useIntersectionObserver() {
  const article = useRef<HTMLElement>(null);
  const sideNav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!article.current) throw new Error("No article");
    if (!sideNav.current) throw new Error("No sideNav");

    const sections = Array.from(article.current.querySelectorAll("section"));
    const links = Array.from(sideNav.current.querySelectorAll("a"));

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

    return () => observer.disconnect();
  }, []);

  return { article, sideNav };
}
