"use client";

import { IoIosLink } from "react-icons/io";
import { ReactNode, Ref, useLayoutEffect, useRef } from "react";

import styles from "@/styles/pages/detail/page.module.css";
import type { Reference } from "@/types/interfaces";

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
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      const image = document.createElement("img");
      image.src = item.image.src;
      image.alt = `${item.name} favicon`;
      li.append(a);
      a.append(image, ` ${item.name} ${item.title}`);
      ul.append(li);
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
