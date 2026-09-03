import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function HeaderMainNavSubNav2({ links }: { links: string[] }) {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const animationFrameIDRef = useRef<number | null>(null);

  function startAnimationScroll(dir: "left" | "right") {
    function scrollStep() {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) {
        console.error("No scrollContainer");
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
      const speed = dir === "left" ? -delta : delta;
      scrollContainer.scrollLeft += speed;
      animationFrameIDRef.current = requestAnimationFrame(scrollStep);
    }

    animationFrameIDRef.current = requestAnimationFrame(scrollStep);
  }

  function stopAnimationScroll() {
    if (animationFrameIDRef.current) {
      cancelAnimationFrame(animationFrameIDRef.current);
      animationFrameIDRef.current = null;
    }
  }

  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainer");
      return;
    }

    let isDown = false;
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const handlePointerDown = (event: PointerEvent) => {
      isDown = true;
      isDragging = false;
      startX = event.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDown) {
        return;
      }
      const x = event.pageX - scrollContainer.offsetLeft;
      const deltaX = x - startX;
      if (Math.abs(deltaX) > 5) {
        isDragging = true;
        scrollContainer.classList.add("dragging");
      }
      scrollContainer.scrollLeft = scrollLeft - deltaX;
    };

    const stopDrag = () => {
      isDown = false;
      scrollContainer.classList.remove("dragging");
    };

    const handleClick = (event: MouseEvent) => {
      if (isDragging) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    const leftButton = leftButtonRef.current;
    if (!leftButton) {
      console.error("No leftButton");
      return;
    }
    const rightButton = rightButtonRef.current;
    if (!rightButton) {
      console.error("No rightButton");
      return;
    }
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      if (scrollLeft <= 1) {
        leftButton.classList.add("clamped");
        leftButton.disabled = true;
      } else {
        leftButton.classList.remove("clamped");
        leftButton.disabled = false;
      }

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        rightButton.classList.add("clamped");
        rightButton.disabled = true;
      } else {
        rightButton.classList.remove("clamped");
        rightButton.disabled = false;
      }
    };

    let scrollContainerController: AbortController | null = null;
    const handleScrollableState = () => {
      if (!scrollContainerController) {
        scrollContainer.classList.add("scrollable");
        scrollContainerController = new AbortController();
        const { signal } = scrollContainerController;
        scrollContainer.addEventListener("pointerdown", handlePointerDown, {
          signal,
        });
        scrollContainer.addEventListener("pointermove", handlePointerMove, {
          signal,
        });
        scrollContainer.addEventListener("pointerup", stopDrag, { signal });
        scrollContainer.addEventListener("pointerleave", stopDrag, { signal });
        scrollContainer.addEventListener("pointercancel", stopDrag, { signal });
        scrollContainer.addEventListener("click", handleClick, {
          capture: true,
          signal,
        });
        scrollContainer.addEventListener("dragstart", handleDragStart, {
          signal,
        });
        scrollContainer.addEventListener("scroll", handleScroll, { signal });
      }

      if (!leftButton.classList.contains("scrollable")) {
        leftButton.classList.add("scrollable");
        leftButton.disabled = false;
        handleScroll();
      }

      if (!rightButton.classList.contains("scrollable")) {
        rightButton.classList.add("scrollable");
        rightButton.disabled = false;
      }
    };
    const handleUnscrollableState = () => {
      if (scrollContainerController) {
        scrollContainer.classList.remove("scrollable");
        scrollContainerController.abort();
        scrollContainerController = null;
      }

      if (leftButton.classList.contains("scrollable")) {
        leftButton.classList.remove("scrollable", "clamped");
        leftButton.disabled = true;
      }

      if (rightButton.classList.contains("scrollable")) {
        rightButton.classList.remove("scrollable", "clamped");
        rightButton.disabled = true;
      }

      stopAnimationScroll();
    };

    const resizeObserver = new ResizeObserver(() => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        handleScrollableState();
      } else {
        handleUnscrollableState();
      }
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      handleUnscrollableState();
      resizeObserver.disconnect();
    };
  }, []);

  const path = usePathname();
  return (
    <div>
      <button
        type="button"
        aria-label="Scroll left"
        aria-controls="scroll-menu"
        ref={leftButtonRef}
        onPointerDown={() => startAnimationScroll("left")}
        onPointerUp={stopAnimationScroll}
        onPointerLeave={stopAnimationScroll}
        onPointerCancel={stopAnimationScroll}
      >
        <FaAngleLeft aria-hidden="true" />
      </button>

      <ul id="scroll-menu" ref={scrollContainerRef}>
        {links.map((link, index) => {
          const href = `/${link.replaceAll(" ", "-").toLowerCase()}`;

          return (
            <li key={index}>
              <Link
                aria-current={path.startsWith(href) ? "page" : undefined}
                href={href}
                className={path.startsWith(href) ? "active" : undefined}
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
        aria-controls="scroll-menu"
        ref={rightButtonRef}
        onPointerDown={() => startAnimationScroll("right")}
        onPointerUp={stopAnimationScroll}
        onPointerLeave={stopAnimationScroll}
        onPointerCancel={stopAnimationScroll}
      >
        <FaAngleRight aria-hidden="true" />
      </button>
    </div>
  );
}
