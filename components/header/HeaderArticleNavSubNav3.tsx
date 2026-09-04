import { useRef, useLayoutEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

import { useStore } from "@/stores/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/constants/breakpoints";

export default function HeaderArticleNavSubNav3({ path }: { path: string }) {
  const setPathOverflow = useStore((state) => state.setPathOverflow);
  const refNavBtnRef = useRef<HTMLButtonElement>(null);
  const pageNavBtnRef = useRef<HTMLButtonElement>(null);

  // ResizeObserver overflow
  useLayoutEffect(() => {
    const refNavBtn = refNavBtnRef.current;
    if (!refNavBtn) {
      console.error("No refNavBtn");
      return;
    }
    const pageNavBtn = pageNavBtnRef.current;
    if (!pageNavBtn) {
      console.error("No pageNavBtn");
      return;
    }

    const pathHistory = refNavBtn.parentElement!.previousElementSibling!
      .previousElementSibling as HTMLElement;
    const container = pathHistory.parentElement! as HTMLDivElement;

    const initialPathHistoryWidth = pathHistory.scrollWidth;
    const fixedWidth =
      parseFloat(window.getComputedStyle(container).gap) +
      refNavBtn.getBoundingClientRect().width +
      pageNavBtn.getBoundingClientRect().width;
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

  const isRefNavBtnActive = useStore((state) => state.isRefNavBtnActive);
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.tablet})`);
  const isRefNavBtnOpen = useStore((state) => state.isRefNavBtnOpen);
  const toggleRefNavBtnOpen = useStore((state) => state.toggleRefNavBtnOpen);

  const isPageNavBtnActive = useStore((state) => state.isPageNavBtnActive);
  const isTableLarge = useMediaQuery(
    `(max-width: ${breakpoints["tablet-lg"]})`,
  );
  const isPageNavBtnOpen = useStore((state) => state.isPageNavBtnOpen);
  const togglePageNavBtnOpen = useStore((state) => state.togglePageNavBtnOpen);

  return (
    <nav aria-label="Reference and page navigations">
      <button
        type="button"
        aria-label="Toggle all reference navigation"
        aria-controls="all-reference-navigation"
        aria-expanded={isRefNavBtnOpen}
        ref={refNavBtnRef}
        className={`${isRefNavBtnActive ? "active" : ""} ${isRefNavBtnOpen ? "open" : ""}`.trim()}
        disabled={!(isRefNavBtnActive && isTablet)}
        onClick={toggleRefNavBtnOpen}
      >
        <FaChevronUp aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Toggle page navigation"
        aria-controls="page-navigation"
        aria-expanded={isPageNavBtnOpen}
        ref={pageNavBtnRef}
        className={`${isPageNavBtnActive ? "active" : ""} ${isPageNavBtnOpen ? "open" : ""}`.trim()}
        disabled={!(isPageNavBtnActive && isTableLarge)}
        onClick={togglePageNavBtnOpen}
      >
        <FaChevronUp aria-hidden="true" />
      </button>
    </nav>
  );
}
