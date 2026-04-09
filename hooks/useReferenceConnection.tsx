import { type RefObject, useEffect } from "react";

import styles from "@/styles/detail-page/page.module.css";

export default function useReferenceConnection(
  type: "default" | "table",
  buttonRef: RefObject<HTMLButtonElement | null>,
) {
  useEffect(() => {
    if (!buttonRef.current) throw new Error("No buttonRef");
    let target = "";
    if (type === "default") {
      if (
        buttonRef.current.nextElementSibling!.className.includes("toggle-list")
      ) {
        target = buttonRef.current.nextElementSibling!.children[1].textContent;
      } else {
        target =
          buttonRef.current.nextElementSibling!.firstElementChild!.textContent;
      }
    } else if (type === "table") {
      target = buttonRef.current.nextElementSibling!.textContent;
    }

    const navs: HTMLElement[] = Array.from(
      document.querySelectorAll("body > main > aside:first-child > nav"),
    );
    if (navs.length === 0) throw new Error("No navs");

    for (let i = 0; i < navs.length; i++) {
      if (navs[i].dataset.target === target) {
        buttonRef.current.addEventListener("click", () => {
          navs[i].classList.toggle(styles.active);
        });

        const rect = buttonRef.current.getBoundingClientRect();
        navs[i].style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header

        const lists = Array.from(navs[i].querySelectorAll("li"));
        for (const list of lists) {
          if (list.dataset.articleShortcut === "true") {
            buttonRef.current.nextElementSibling!.id = target
              .replaceAll(" ", "-")
              .toLowerCase();
          }
        }

        break;
      }

      if (i === navs.length - 1) {
        throw new Error(
          `A mismatched target was found. Check the reference variable. Something should be ${target}.`,
        );
      }
    }
  }, [buttonRef, type]);
}
