import { type Ref, useRef, useLayoutEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

import { useStore } from "@/stores/useStore";

export default function HeaderArticleNavSubNav3({
  pathHistoryRef,
  pathHistoryButtonRef,
  path,
}: {
  pathHistoryRef: Ref<HTMLUListElement>;
  pathHistoryButtonRef: Ref<HTMLButtonElement>;
  path: string;
}) {
  const isRefNavBtnActive = useStore((state) => state.isRefNavBtnActive);
  const isRefNavBtnOpen = useStore((state) => state.isRefNavBtnOpen);
  const toggleRefNavBtnOpen = useStore((state) => state.toggleRefNavBtnOpen);

  const isPageNavBtnActive = useStore((state) => state.isPageNavBtnActive);
  const isPageNavBtnOpen = useStore((state) => state.isPageNavBtnOpen);
  const togglePageNavBtnOpen = useStore((state) => state.togglePageNavBtnOpen);

  const referenceNavButtonRef = useRef<HTMLButtonElement>(null);
  const pageNavButtonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    // Check overflow.
    const pathHistory =
      typeof pathHistoryRef === "object" && pathHistoryRef
        ? pathHistoryRef.current
        : null;
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
    const pathHistoryButton =
      typeof pathHistoryButtonRef === "object" && pathHistoryButtonRef
        ? pathHistoryButtonRef.current
        : null;
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

      pathHistory.classList.toggle("overflow", isOverflow);
      pathHistoryButton.parentElement!.classList.toggle("overflow", isOverflow);
    };
    checkOverflow();
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [path, pathHistoryButtonRef, pathHistoryRef]);

  return (
    <div>
      <button
        ref={referenceNavButtonRef}
        className={`${isRefNavBtnActive ? "active" : ""} ${isRefNavBtnOpen ? "open" : ""}`.trim()}
        disabled={!isRefNavBtnActive}
        onClick={toggleRefNavBtnOpen}
      >
        <FaChevronUp />
      </button>
      <button
        ref={pageNavButtonRef}
        className={`${isPageNavBtnActive ? "active" : ""} ${isPageNavBtnOpen ? "open" : ""}`.trim()}
        disabled={!isPageNavBtnActive}
        onClick={togglePageNavBtnOpen}
      >
        <FaChevronUp />
      </button>
    </div>
  );
}
