import { type RefObject, useRef, useEffect } from "react";

import styles from "@/styles/detail-page/page.module.css";

export default function useReferenceConnection(
  type: "default" | "table",
  buttonRef: RefObject<HTMLButtonElement | null>,
) {
  const toggleListDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) throw new Error("No buttonRef");
    let target = "";
    if (type === "default") {
      if (button.nextElementSibling!.className.includes("toggle-list")) {
        target = button.nextElementSibling!.children[1].textContent;
        toggleListDivRef.current = button.nextElementSibling!
          .children[0] as HTMLDivElement;
      } else {
        target = button.nextElementSibling!.firstElementChild!.textContent;
      }
    } else if (type === "table") {
      target = button.nextElementSibling!.textContent;
    }

    const navs = document.querySelectorAll<HTMLElement>(
      "body > main > aside:first-child > nav",
    );
    if (navs.length === 0) throw new Error("No navs");

    let navTarget: HTMLElement | null = null;
    function handleClick() {
      navTarget!.classList.toggle(styles.active);
    }

    for (let i = 0; i < navs.length; i++) {
      if (navs[i].dataset.target === target) {
        navTarget = navs[i];
        button.addEventListener("click", handleClick);

        const rect = button.getBoundingClientRect();
        navs[i].style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header

        const lists = navs[i].querySelectorAll<HTMLLIElement>("li");
        for (const list of lists) {
          if (list.dataset.articleShortcut === "true") {
            button.nextElementSibling!.id = target
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

    return () => button.removeEventListener("click", handleClick);
  }, [buttonRef, type]);

  // Mutation Observer
  useEffect(() => {
    if (!toggleListDivRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const navs = document.querySelectorAll<HTMLElement>(
            "body > main > aside:first-child > nav",
          );
          if (navs.length === 0) throw new Error("No navs");

          const classes = [
            styles["reference-button-default-container"],
            styles["reference-button-table-container"],
          ];
          const selector = classes
            .map((cls) => `body > main > article div.${cls}`)
            .join(", ");
          const referenceContainers =
            document.querySelectorAll<HTMLDivElement>(selector);
          if (navs.length !== referenceContainers.length)
            throw new Error(
              `navs.length ${navs.length} must be the same as referenceContainers.length: ${referenceContainers.length}`,
            );

          for (let i = 0; i < navs.length; i++) {
            const rect = referenceContainers[i].getBoundingClientRect();
            navs[i].style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header
          }
        }
      });
    });

    observer.observe(toggleListDivRef.current, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [toggleListDivRef]);
}
