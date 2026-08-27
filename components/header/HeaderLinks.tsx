"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import logo from "@/public/logo.png";

interface HeaderLinksProps {
  links: string[];
}

export default function HeaderLinks({ links }: HeaderLinksProps) {
  const ulRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<number | null>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const path = usePathname();

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

  useEffect(() => {
    const scrollContainer = ulRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainer");
      return;
    }
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

    let isDown = false;
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    let areEventsAdded = false;

    const handleMouseDown = (event: MouseEvent) => {
      isDown = true;
      isDragging = false;
      startX = event.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDown) {
        return;
      }
      event.preventDefault();

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

    const handleMouseUp = () => {
      stopDrag();
    };

    const handleMouseLeave = () => {
      stopDrag();
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

    const handleScrollableState = () => {
      if (!areEventsAdded) {
        areEventsAdded = true;
        scrollContainer.classList.add("scrollable");
        scrollContainer.addEventListener("mousedown", handleMouseDown);
        scrollContainer.addEventListener("mousemove", handleMouseMove);
        scrollContainer.addEventListener("mouseup", handleMouseUp);
        scrollContainer.addEventListener("mouseleave", handleMouseLeave);
        scrollContainer.addEventListener("click", handleClick, true);
        scrollContainer.addEventListener("dragstart", handleDragStart);
        scrollContainer.addEventListener("scroll", handleScroll);
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
      if (areEventsAdded) {
        areEventsAdded = false;
        scrollContainer.classList.remove("scrollable");
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("mouseup", handleMouseUp);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        scrollContainer.removeEventListener("click", handleClick, true);
        scrollContainer.removeEventListener("dragstart", handleDragStart);
        scrollContainer.removeEventListener("scroll", handleScroll);
      }

      if (leftButton.classList.contains("scrollable")) {
        leftButton.classList.remove("scrollable");
        leftButton.classList.remove("clamped");
        leftButton.disabled = true;
      }

      if (rightButton.classList.contains("scrollable")) {
        rightButton.classList.remove("scrollable");
        rightButton.classList.remove("clamped");
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
          onMouseDown={() => startAnimationScroll("left")}
          onMouseUp={stopAnimationScroll}
          onMouseLeave={stopAnimationScroll}
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
          onMouseDown={() => startAnimationScroll("right")}
          onMouseUp={stopAnimationScroll}
          onMouseLeave={stopAnimationScroll}
        >
          <FaAngleRight />
        </button>
      </div>
    </nav>
  );
}
