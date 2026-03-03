"use client";

import { IoIosLink } from "react-icons/io";
import { ReactNode, Ref, useLayoutEffect, useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import type { Reference } from "@/types/detail-page/interfaces";

interface ReferenceButtonProps {
  reference: Reference[];
  asideRef: Ref<HTMLElement>;
  children: ReactNode;
}

export default function ReferenceButton({
  reference,
  asideRef,
  children,
}: ReferenceButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const nav = document.createElement("nav");
    const header = document.createElement("header");
    header.innerText = "Reference";
    const main = document.createElement("main");

    const ul = document.createElement("ul");
    reference.forEach((item) => {
      const li = document.createElement("li");
      ul.append(li);
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      li.append(a);
      const image = document.createElement("img");
      image.src = item.image.src;
      image.alt = `${item.name} Favicon`;
      const span = document.createElement("span");

      if (item.name === "Article Shortcut") {
        span.innerText = item.title;
        a.target = "";
      } else {
        span.innerText = `${item.name} | ${item.title}`;
      }
      a.append(image, span);
    });

    nav.append(header, main);
    main.append(ul);

    if (typeof asideRef === "function") throw new Error("Type Error asideRef");
    if (!asideRef || !asideRef.current) throw new Error("No asideRef");
    asideRef.current.append(nav);

    if (!buttonRef.current) throw new Error("No buttonRef");
    buttonRef.current.addEventListener("click", () => {
      nav.classList.toggle(styles.active);
    });

    switch (buttonRef.current.nextElementSibling!.localName) {
      case "h1":
        buttonRef.current.style.left = "-60px";
        break;
      case "h2":
        buttonRef.current.style.left = "-60px";
        break;
      case "h3":
        buttonRef.current.style.left = "-60px";
        break;
      case "p":
        buttonRef.current.style.left = "-50px";
        break;
      case "li": {
        let parent = buttonRef.current.parentElement!.parentElement;
        let ulCount: number = 0;
        while (true) {
          if (parent!.localName === "ul") {
            ulCount++;
          } else if (
            parent!.localName === "section" ||
            parent!.localName === "article"
          ) {
            break;
          }

          parent = parent!.parentElement;
        }
        buttonRef.current.style.left = `${-50 - 40 * ulCount}px`; // -40 is for ul padding-left
        break;
      }
    }

    const rect = buttonRef.current.getBoundingClientRect();
    nav.style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header
  }, [asideRef, reference]);

  return (
    <div className={styles["reference-button-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>

      {children}
    </div>
  );
}
