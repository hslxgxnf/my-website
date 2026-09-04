import {
  useRef,
  useCallback,
  useState,
  useEffect,
  PointerEvent,
  MouseEvent,
} from "react";
import { usePathname } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/constants/breakpoints";

export default function HeaderMainNavSubNav2({ links }: { links: string[] }) {
  // Scroll Animation
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const animationFrameIDRef = useRef<number | null>(null);

  const stopAnimationScroll = useCallback(() => {
    if (animationFrameIDRef.current !== null) {
      cancelAnimationFrame(animationFrameIDRef.current);
      animationFrameIDRef.current = null;
    }
  }, []);

  const startAnimationScroll = (dir: "left" | "right") => {
    stopAnimationScroll();

    function scrollStep() {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) {
        console.error("No scrollContainerRef");
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      if (dir === "left" && scrollLeft <= 1) {
        stopAnimationScroll();
        return;
      }
      if (dir === "right" && scrollLeft + clientWidth >= scrollWidth - 1) {
        stopAnimationScroll();
        return;
      }

      const delta = 6;
      scrollContainer.scrollLeft += dir === "left" ? -delta : delta;
      animationFrameIDRef.current = requestAnimationFrame(scrollStep);
    }

    animationFrameIDRef.current = requestAnimationFrame(scrollStep);
  };

  // canScrollLeft, canScrollRight
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtonScrollState = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainerRef");
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  // ResizeObserver isScrollable
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainerRef");
      return;
    }

    const checkScrollable = () => {
      const isOverflow =
        scrollContainer.scrollWidth > scrollContainer.clientWidth;

      if (isOverflow) {
        setIsScrollable(true);
        updateButtonScrollState();
      } else {
        setIsScrollable(false);
        stopAnimationScroll();
      }
    };

    const resizeObserver = new ResizeObserver(checkScrollable);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(scrollContainer);

    return () => {
      stopAnimationScroll();
      resizeObserver.disconnect();
    };
  }, [updateButtonScrollState, stopAnimationScroll]);

  // scrollContainer Events
  const dragInfoRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const wasDraggingRef = useRef(false);

  function handlePointerDown(event: PointerEvent<HTMLUListElement>) {
    if (!isScrollable) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainerRef");
      return;
    }

    dragInfoRef.current = {
      isDown: true,
      startX: event.pageX - scrollContainer.offsetLeft,
      scrollLeft: scrollContainer.scrollLeft,
    };
    setIsDragging(false);
    wasDraggingRef.current = false;
  }

  function handlePointerMove(event: PointerEvent<HTMLUListElement>) {
    const { isDown, startX, scrollLeft } = dragInfoRef.current;

    if (!isScrollable || !isDown) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainerRef");
      return;
    }

    const x = event.pageX - scrollContainer.offsetLeft;
    const deltaX = x - startX;

    if (Math.abs(deltaX) > 5 && !isDragging) {
      setIsDragging(true);
      wasDraggingRef.current = true;
    }

    scrollContainer.scrollLeft = scrollLeft - deltaX;
  }

  const handlePointerStop = () => {
    dragInfoRef.current.isDown = false;
    setIsDragging(false);
  };

  // Prevent navigation on click after dragging.
  const handleClickCapture = (event: MouseEvent<HTMLUListElement>) => {
    if (wasDraggingRef.current) {
      event.preventDefault();
      event.stopPropagation();
      wasDraggingRef.current = false;
    }
  };

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`);

  const path = usePathname();

  return (
    <nav aria-label="Scroll main navigation">
      <button
        type="button"
        aria-label="Scroll left"
        aria-controls="scroll-main-navigation"
        className={`${isScrollable ? "scrollable" : ""} ${!canScrollLeft ? "clamped" : ""}`.trim()}
        disabled={!isScrollable || !canScrollLeft || isMobile}
        onPointerDown={() => startAnimationScroll("left")}
        onPointerUp={stopAnimationScroll}
        onPointerLeave={stopAnimationScroll}
        onPointerCancel={stopAnimationScroll}
      >
        <FaAngleLeft aria-hidden="true" />
      </button>

      <ul
        id="scroll-main-navigation"
        ref={scrollContainerRef}
        className={`${isScrollable ? "scrollable" : ""} ${isDragging ? "dragging" : ""}`.trim()}
        onScroll={updateButtonScrollState}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerStop}
        onPointerLeave={handlePointerStop}
        onPointerCancel={handlePointerStop}
        onClickCapture={handleClickCapture}
      >
        {links.map((link, index) => {
          const href = `/${link.replaceAll(" ", "-").toLowerCase()}`;

          return (
            <li key={index}>
              <Link
                aria-current={path.startsWith(href) ? "page" : undefined}
                href={href}
                className={path.startsWith(href) ? "active" : undefined}
                onDragStart={(e) => e.preventDefault()}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        aria-label="Scroll right"
        aria-controls="scroll-main-navigation"
        className={`${isScrollable ? "scrollable" : ""} ${!canScrollRight ? "clamped" : ""}`.trim()}
        disabled={!isScrollable || !canScrollRight || isMobile}
        onPointerDown={() => startAnimationScroll("right")}
        onPointerUp={stopAnimationScroll}
        onPointerLeave={stopAnimationScroll}
        onPointerCancel={stopAnimationScroll}
      >
        <FaAngleRight aria-hidden="true" />
      </button>
    </nav>
  );
}
