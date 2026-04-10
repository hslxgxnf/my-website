import { type RefObject, useRef, useEffect } from "react";

import styles from "@/styles/detail-page/page.module.css";

export default function useReferenceConnection(
  type: "default" | "table",
  buttonRef: RefObject<HTMLButtonElement | null>,
) {
  const toggleListDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navs = document.querySelectorAll<HTMLElement>(
      "body > main > aside:first-child > nav",
    );
    if (navs.length === 0) throw new Error("No navs");

    const button = buttonRef.current;
    if (!button) throw new Error("No buttonRef");
    let articleTarget = "";
    if (type === "default") {
      if (button.nextElementSibling!.className.includes("toggle-list")) {
        toggleListDivRef.current = button.nextElementSibling!
          .children[0] as HTMLDivElement;
        articleTarget = button.nextElementSibling!.children[1].textContent;
      } else {
        articleTarget = button.nextElementSibling!.children[0].textContent;
      }
    } else if (type === "table") {
      articleTarget = button.nextElementSibling!.textContent;
    }

    let nav: HTMLElement | null = null;
    function handleClick() {
      nav!.classList.toggle(styles.active);
    }

    for (let i = 0; i < navs.length; i++) {
      if (navs[i].dataset.target === articleTarget) {
        nav = navs[i];
        button.addEventListener("click", handleClick);

        const rect = button.getBoundingClientRect();
        navs[i].style.top = rect.top - 160 + window.scrollY + "px"; // 160 is the height of the header

        const lists = navs[i].querySelectorAll<HTMLLIElement>("li");
        for (const list of lists) {
          if (list.dataset.articleShortcut === "true") {
            button.nextElementSibling!.id = articleTarget
              .replaceAll(" ", "-")
              .toLowerCase();
          }
        }

        break;
      }

      if (i === navs.length - 1) {
        throw new Error(
          `A mismatched target was found. Check the reference variable. Something should be ${articleTarget}.`,
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

          const selector = `body > main > article :is(div.${styles["reference-button-default-container"]}, span.${styles["reference-button-table-container"]})`;
          const referenceContainers =
            document.querySelectorAll<HTMLDivElement>(selector);
          if (navs.length !== referenceContainers.length)
            throw new Error(
              `navs.length ${navs.length} must be the same as referenceContainers.length: ${referenceContainers.length}`,
            );

          for (let i = 0; i < navs.length; i++) {
            const navTarget = navs[i].dataset.target;

            let index = 0;
            for (let j = 0; j < referenceContainers.length; j++) {
              let articleTarget = "";
              if (
                referenceContainers[j].className.includes(
                  "reference-button-default-container",
                )
              ) {
                if (
                  referenceContainers[j].children[1].className.includes(
                    "toggle-list",
                  )
                ) {
                  articleTarget =
                    referenceContainers[j].children[1].children[1].textContent;
                } else {
                  articleTarget =
                    referenceContainers[j].children[1].children[0].textContent;
                }
              } else {
                articleTarget = referenceContainers[j].children[1].textContent;
              }

              if (articleTarget === navTarget) {
                index = j;
                break;
              }
            }

            const rect = referenceContainers[index].getBoundingClientRect();
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
