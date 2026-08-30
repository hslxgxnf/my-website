"use client";

import { Dispatch, SetStateAction, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

import logo from "@/public/logo.png";

interface HeaderLinksProps {
  links: string[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderLinks({
  links,
  isOpen,
  setIsOpen,
}: HeaderLinksProps) {
  const ulRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<number | null>(null);
  const startAnimationScroll = (dir: "left" | "right") => {
    const scrollContainer = ulRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainer");
      return;
    }
    const delta = 6;
    const speed = dir === "left" ? -delta : delta;
    const scrollStep = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      if (dir === "left" && scrollLeft <= 1) {
        stopAnimationScroll();
        return;
      }
      if (dir === "right" && scrollLeft + clientWidth >= scrollWidth - 1) {
        stopAnimationScroll();
        return;
      }
      scrollContainer.scrollLeft += speed;
      animationRef.current = requestAnimationFrame(scrollStep);
    };

    animationRef.current = requestAnimationFrame(scrollStep);
  };
  const stopAnimationScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scrollContainer = ulRef.current;
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

  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  useEffect(() => {
    // Close the open menu on page change.
    if (isOpen) {
      setIsOpen(false);
    }
  }, [path]);
  useEffect(() => {
    // Close the open menu when the Escape key is pressed.
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);

        // Remove the focus effect after the menu is closed.
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
  return (
    <nav>
      <Link href="/">
        <Image
          src={logo}
          alt="logo image generate by ChatGPT"
          loading="eager"
        />
      </Link>

      <div>
        <button
          ref={leftButtonRef}
          onPointerDown={() => startAnimationScroll("left")}
          onPointerUp={stopAnimationScroll}
          onPointerLeave={stopAnimationScroll}
          onPointerCancel={stopAnimationScroll}
        >
          <FaAngleLeft />
        </button>
        <ul ref={ulRef}>
          {links.map((link, index) => {
            const href = `/${link.replaceAll(" ", "-").toLowerCase()}`;

            return (
              <li key={index}>
                <Link
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
          ref={rightButtonRef}
          onPointerDown={() => startAnimationScroll("right")}
          onPointerUp={stopAnimationScroll}
          onPointerLeave={stopAnimationScroll}
          onPointerCancel={stopAnimationScroll}
        >
          <FaAngleRight />
        </button>
      </div>

      <div>
        <button onClick={handleClick} className={isOpen ? "open" : undefined}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
        <ul className={isOpen ? "open" : undefined}>
          {links.map((link, index) => {
            const href = `/${link.replaceAll(" ", "-").toLowerCase()}`;

            return (
              <li key={index}>
                <Link
                  href={href}
                  className={path.startsWith(href) ? "active" : undefined}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
