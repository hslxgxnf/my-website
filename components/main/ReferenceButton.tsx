"use client";

import { type ReactNode, useRef, useEffect } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/main-description-&-list/page.module.scss";

interface ReferenceButtonProps {
  children: ReactNode;
}

export default function ReferenceButton({ children }: ReferenceButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Connect buttonRef to its corresponding nav
    const navs = document.querySelectorAll<HTMLElement>(
      "body > main > aside:first-child > nav",
    );
    const referenceButtonContainers = document.querySelectorAll<HTMLDivElement>(
      `body > main > article div.${styles["reference-button-container"]}`,
    );
    if (navs.length !== referenceButtonContainers.length) {
      console.error(
        `navs.length ${navs.length} must be the same as referenceButtonContainers.length: ${referenceButtonContainers.length}`,
      );
      return;
    }

    const button = buttonRef.current;
    if (!button) {
      console.error("No button");
      return;
    }
    const currentReferenceButtonContainer = button.parentElement;
    const index = Array.from(referenceButtonContainers).indexOf(
      currentReferenceButtonContainer as HTMLDivElement,
    );
    const articleTargetElement = button.nextElementSibling;
    if (!articleTargetElement) {
      console.error("No articleTargetElement");
      return;
    }
    let articleTarget = "";
    if (articleTargetElement.className.includes("toggle-list")) {
      articleTarget = articleTargetElement.children[1].textContent;
    } else {
      if (articleTargetElement.children[0]) {
        articleTarget = articleTargetElement.children[0].textContent;
      } else {
        articleTarget = articleTargetElement.textContent;
      }
    }
    if (navs[index].dataset.target !== articleTarget) {
      console.error(
        `A mismatched connection was found. navs[${index}].dataset.target: ${navs[index].dataset.target} must be the same as articleTarget: ${articleTarget}.`,
      );
      return;
    }

    const controller = new AbortController();
    button.addEventListener(
      "click",
      () => {
        navs[index].classList.toggle(styles.active);
      },
      {
        signal: controller.signal,
      },
    );

    // Dynamically assign the id value instead of hard-coding it,
    // allowing a new window targeted to a hash to scroll smoothly.
    const lists = navs[index].querySelectorAll<HTMLLIElement>("li");
    for (const list of lists) {
      if (list.dataset.self === "true") {
        button.nextElementSibling!.id = articleTarget
          .replaceAll(" ", "-")
          .toLowerCase();
      }
    }

    // Observe the size changes of viewport and reposition navs
    let resizeObserver: ResizeObserver | null = null;
    if (navs.length === index + 1) {
      resizeObserver = new ResizeObserver(() => {
        const header = document.querySelector<HTMLElement>("body > header");
        if (!header) {
          console.error("No header");
          return;
        }
        const headerHeight = header.getBoundingClientRect().height;

        for (let i = 0; i < navs.length; i++) {
          navs[i].style.top =
            referenceButtonContainers[i].getBoundingClientRect().top -
            headerHeight +
            window.scrollY +
            "px";
        }
      });

      resizeObserver.observe(document.documentElement);
    }

    return () => {
      controller.abort();
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
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
