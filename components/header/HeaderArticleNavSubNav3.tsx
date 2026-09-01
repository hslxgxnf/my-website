import { type RefObject, useRef, useLayoutEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function HeaderArticleNavSubNav3({
  pathHistoryRef,
  pathHistoryButtonRef,
  path,
}: {
  pathHistoryRef: RefObject<HTMLUListElement | null>;
  pathHistoryButtonRef: RefObject<HTMLButtonElement | null>;
  path: string;
}) {
  const referenceNavButtonRef = useRef<HTMLButtonElement>(null);
  const pageNavButtonRef = useRef<HTMLButtonElement>(null);

  function handleReferenceNavButtonClick() {
    const referenceNavButton = referenceNavButtonRef.current;
    if (!referenceNavButton) {
      console.error("No referenceNavButton");
      return;
    }
    referenceNavButton.classList.toggle("open");

    const referenceNav = document.querySelector<HTMLDivElement>(
      "body > main > aside:first-child > div",
    );
    if (!referenceNav) {
      console.error("No referenceNav");
      return;
    }
    referenceNav.classList.toggle("open");
  }

  function handlePageNavButtonClick() {
    const pageNavButton = pageNavButtonRef.current;
    if (!pageNavButton) {
      console.error("No pageNavButton");
      return;
    }
    pageNavButton.classList.toggle("open");

    const pageNav = document.querySelector<HTMLDivElement>(
      "body > main > aside:last-child > div",
    );
    if (!pageNav) {
      console.error("No pageNav");
      return;
    }
    pageNav.classList.toggle("open");
  }

  useLayoutEffect(() => {
    // Reset the settings from the previous page.
    const referenceNavButton = referenceNavButtonRef.current;
    if (!referenceNavButton) {
      console.error("No referenceNavButton");
      return;
    }
    const pageNavButton = pageNavButtonRef.current;
    if (!pageNavButton) {
      console.error("No pageNavButton");
      return;
    }

    referenceNavButton.className = "";
    pageNavButton.className = "";
  }, [path]);

  useLayoutEffect(() => {
    // Check active.
    const referenceNavButton = referenceNavButtonRef.current;
    if (!referenceNavButton) {
      console.error("No referenceNavButton");
      return;
    }
    const pageNavButton = pageNavButtonRef.current;
    if (!pageNavButton) {
      console.error("No pageNavButton");
      return;
    }

    const referenceNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:first-child",
    );
    if (!referenceNavParent) {
      console.error("No referenceNavParent");
      return;
    }
    if (referenceNavParent.children.length === 0) {
      referenceNavButton.classList.remove("active");
      referenceNavButton.disabled = true;
    } else {
      referenceNavButton.classList.add("active");
      referenceNavButton.disabled = false;
    }

    const pageNavParent = document.querySelector<HTMLElement>(
      "body > main > aside:last-child",
    );
    if (!pageNavParent) {
      console.error("No pageNavParent");
      return;
    }
    const checkChildren = () => {
      if (pageNavParent.children.length === 0) {
        pageNavButton.classList.remove("active");
        pageNavButton.disabled = true;
      } else {
        pageNavButton.classList.add("active");
        pageNavButton.disabled = false;
      }
    };
    checkChildren();
    const mutationObserver = new MutationObserver(() => {
      checkChildren();
    });
    mutationObserver.observe(pageNavParent, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, [path]);

  useLayoutEffect(() => {
    // Check overflow.
    const pathHistory = pathHistoryRef.current;
    if (!pathHistory) {
      console.error("No pathHistory");
      return;
    }
    const referenceNavButton = referenceNavButtonRef.current;
    if (!referenceNavButton) {
      console.error("No referenceNavButton");
      return;
    }
    const pageNavButton = pageNavButtonRef.current;
    if (!pageNavButton) {
      console.error("No pageNavButton");
      return;
    }
    const pathHistoryButton = pathHistoryButtonRef.current;
    if (!pathHistoryButton) {
      console.error("No pathHistoryButton");
      return;
    }

    const defaultPathHistoryWidth = pathHistory.scrollWidth;
    const container = pathHistory.parentElement!;
    const fixedWidth =
      parseFloat(window.getComputedStyle(container).gap) +
      referenceNavButton.getBoundingClientRect().width +
      pageNavButton.getBoundingClientRect().width;

    const checkOverflow = () => {
      const changingContainerWidth =
        container.getBoundingClientRect().width -
        parseFloat(window.getComputedStyle(container).paddingLeft) -
        parseFloat(window.getComputedStyle(container).paddingRight);

      const isOverflow =
        defaultPathHistoryWidth + fixedWidth > changingContainerWidth;

      if (isOverflow) {
        pathHistory.classList.add("overflow");
        pathHistoryButton.parentElement!.classList.add("overflow");
      } else {
        pathHistory.classList.remove("overflow");
        pathHistoryButton.parentElement!.classList.remove("overflow");
      }
    };
    checkOverflow();
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [path]);

  return (
    <div>
      <button
        ref={referenceNavButtonRef}
        onClick={handleReferenceNavButtonClick}
      >
        <FaChevronUp />
      </button>
      <button ref={pageNavButtonRef} onClick={handlePageNavButtonClick}>
        <FaChevronUp />
      </button>
    </div>
  );
}
