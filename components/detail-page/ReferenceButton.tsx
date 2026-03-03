"use client";

import { Ref, ReactNode, useRef, useLayoutEffect } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/detail-page/page.module.css";

interface ReferenceButtonProps {
  asideRef: Ref<HTMLElement>;
  children: ReactNode;
}

export default function ReferenceButton({
  asideRef,
  children,
}: ReferenceButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!buttonRef.current) throw new Error("No buttonRef");
    const buttonContainers = Array.from(
      document.querySelectorAll(`div.${styles["reference-button-container"]}`),
    );
    let targetIndex = -1;
    for (let i = 0; i < buttonContainers.length; i++) {
      if (buttonContainers[i].firstElementChild === buttonRef.current) {
        targetIndex = i;
        break;
      }
    }

    if (typeof asideRef === "function") throw new Error("Type Error asideRef");
    if (!asideRef || !asideRef.current) throw new Error("No asideRef");
    const navs = Array.from(asideRef.current.querySelectorAll("nav"));
    const rect = buttonRef.current.getBoundingClientRect();
    navs[targetIndex].style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header

    buttonRef.current.addEventListener("click", () => {
      navs[targetIndex].classList.toggle(styles.active);
    });
  }, [asideRef]);

  return (
    <div className={styles["reference-button-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>

      {children}
    </div>
  );
}
