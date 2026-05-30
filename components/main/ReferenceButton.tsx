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
    // Connect the buttonRef to its corresponding nav
    const navs = document.querySelectorAll<HTMLElement>(
      "body > main > aside:first-child > nav",
    );
    const selector = `body > main > article div.${styles["reference-button-container"]}`;
    const referenceButtonContainers =
      document.querySelectorAll<HTMLDivElement>(selector);
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
    let foundIndex = -1;
    for (let i = 0; i < referenceButtonContainers.length; i++) {
      if (referenceButtonContainers[i] === currentReferenceButtonContainer) {
        foundIndex = i;
        break;
      }
    }
    if (foundIndex === -1) {
      console.error("No foundIndex");
      return;
    }

    const articleTargetElement = button.nextElementSibling;
    if (!articleTargetElement) {
      console.error("No articleTargetElement");
      return;
    }
    let articleTarget = "";
    let toggleListDiv: HTMLDivElement | null = null;
    if (articleTargetElement.className.includes("toggle-list")) {
      toggleListDiv = articleTargetElement.children[0] as HTMLDivElement;
      articleTarget = articleTargetElement.children[1].textContent;
    } else {
      if (articleTargetElement.children[0]) {
        articleTarget = articleTargetElement.children[0].textContent;
      } else {
        articleTarget = articleTargetElement.textContent;
      }
    }

    if (navs[foundIndex].dataset.target !== articleTarget) {
      console.error(
        `A mismatched connection was found. navs[${foundIndex}].dataset.target: ${navs[foundIndex].dataset.target} must be the same as articleTarget: ${articleTarget}.`,
      );
      return;
    }
    const controller = new AbortController();
    button.addEventListener(
      "click",
      () => {
        navs[foundIndex].classList.toggle(styles.active);
      },
      {
        signal: controller.signal,
      },
    );
    const header = document.querySelector<HTMLElement>("body > header");
    if (!header) {
      console.error("No header");
      return;
    }
    const headerHeight = header.getBoundingClientRect().height;
    navs[foundIndex].style.top =
      button.getBoundingClientRect().top - headerHeight + window.scrollY + "px";
    // Dynamically assign the id value instead of hard-coding it,
    // allowing a new window targeted to a hash to scroll smoothly.
    const lists = navs[foundIndex].querySelectorAll<HTMLLIElement>("li");
    for (const list of lists) {
      if (list.dataset.self === "true") {
        button.nextElementSibling!.id = articleTarget
          .replaceAll(" ", "-")
          .toLowerCase();
      }
    }

    // Observe the class changes to the toggleListDiv
    let observer: MutationObserver | null = null;
    if (toggleListDiv) {
      observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          for (let i = 0; i < navs.length; i++) {
            navs[i].style.top =
              referenceButtonContainers[i].getBoundingClientRect().top -
              headerHeight +
              window.scrollY +
              "px";
          }
        });
      });

      observer.observe(toggleListDiv, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // Observe the scale changes to the window viewport
    // Prevent duplicate event listeners
    if (window.visualViewport && !window.visualViewport.onresize) {
      window.visualViewport.onresize = () => {
        for (let i = 0; i < navs.length; i++) {
          navs[i].style.top =
            referenceButtonContainers[i].getBoundingClientRect().top -
            headerHeight +
            window.scrollY +
            "px";
        }
      };
    }

    return () => {
      controller.abort();
      if (observer) {
        observer.disconnect();
      }
      if (window.visualViewport && window.visualViewport.onresize) {
        window.visualViewport.onresize = null;
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
