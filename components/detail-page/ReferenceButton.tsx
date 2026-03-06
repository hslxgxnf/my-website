"use client";

import { ReactNode, useRef, useLayoutEffect } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/detail-page/page.module.css";

interface ReferenceButtonProps {
  children: ReactNode;
}

export default function ReferenceButton({ children }: ReferenceButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!buttonRef.current) throw new Error("No buttonRef");
    const buttons = Array.from(
      document.querySelectorAll(
        `div.${styles["reference-button-container"]} > button`,
      ),
    );
    const targetIndex = buttons.indexOf(buttonRef.current);

    const navs: HTMLElement[] = Array.from(
      document.querySelectorAll("body > main > aside:first-child > nav"),
    );

    // reference Guard
    const realTarget =
      buttons[targetIndex].nextElementSibling!.firstElementChild!.textContent;
    const navTarget = navs[targetIndex].dataset.target;
    if (realTarget !== navTarget)
      throw new Error(
        `A mismatched target was found: ${navTarget}. Change to ${realTarget}.`,
      );

    buttonRef.current.addEventListener("click", () => {
      navs[targetIndex].classList.toggle(styles.active);
    });

    const rect = buttonRef.current.getBoundingClientRect();
    navs[targetIndex].style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header
  }, []);

  return (
    <div className={styles["reference-button-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>

      {children}
    </div>
  );
}
