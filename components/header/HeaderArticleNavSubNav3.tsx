import { useRef, useLayoutEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

import { useStore } from "@/stores/useStore";

export default function HeaderArticleNavSubNav3({ path }: { path: string }) {
  const setPathOverflow = useStore((state) => state.setPathOverflow);

  const isRefNavBtnActive = useStore((state) => state.isRefNavBtnActive);
  const isRefNavBtnOpen = useStore((state) => state.isRefNavBtnOpen);
  const toggleRefNavBtnOpen = useStore((state) => state.toggleRefNavBtnOpen);

  const isPageNavBtnActive = useStore((state) => state.isPageNavBtnActive);
  const isPageNavBtnOpen = useStore((state) => state.isPageNavBtnOpen);
  const togglePageNavBtnOpen = useStore((state) => state.togglePageNavBtnOpen);

  const referenceNavButtonRef = useRef<HTMLButtonElement>(null);
  const pageNavButtonRef = useRef<HTMLButtonElement>(null);

  // ResizeObserver overflow
  useLayoutEffect(() => {
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

    const pathHistory = referenceNavButton.parentElement!
      .previousElementSibling!.previousElementSibling as HTMLUListElement;
    const container = pathHistory.parentElement! as HTMLDivElement;

    const initialPathHistoryWidth = pathHistory.scrollWidth;
    const fixedWidth =
      parseFloat(window.getComputedStyle(container).gap) +
      referenceNavButton.getBoundingClientRect().width +
      pageNavButton.getBoundingClientRect().width;
    const containerPadding =
      parseFloat(window.getComputedStyle(container).paddingLeft) +
      parseFloat(window.getComputedStyle(container).paddingRight);

    const resizeObserver = new ResizeObserver(() => {
      const changingContainerWidth =
        container.getBoundingClientRect().width - containerPadding;

      const isOverflow =
        initialPathHistoryWidth + fixedWidth > changingContainerWidth;

      if (isOverflow) {
        setPathOverflow(true);
      } else {
        setPathOverflow(false);
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [path, setPathOverflow]);

  return (
    <div>
      <button
        type="button"
        aria-label="Toggle all reference navigation"
        aria-controls="all-reference-navigation"
        aria-expanded={isRefNavBtnOpen}
        ref={referenceNavButtonRef}
        className={`${isRefNavBtnActive ? "active" : ""} ${isRefNavBtnOpen ? "open" : ""}`.trim()}
        disabled={!isRefNavBtnActive}
        onClick={toggleRefNavBtnOpen}
      >
        <FaChevronUp aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Toggle page navigation"
        aria-controls="page-navigation"
        aria-expanded={isPageNavBtnOpen}
        ref={pageNavButtonRef}
        className={`${isPageNavBtnActive ? "active" : ""} ${isPageNavBtnOpen ? "open" : ""}`.trim()}
        disabled={!isPageNavBtnActive}
        onClick={togglePageNavBtnOpen}
      >
        <FaChevronUp aria-hidden="true" />
      </button>
    </div>
  );
}
