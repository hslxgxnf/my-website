"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";

interface HeaderLinksProps {
  links: string[];
}

export default function HeaderLinks({ links }: HeaderLinksProps) {
  const ulRef = useRef<HTMLUListElement>(null);
  const path = usePathname();

  useEffect(() => {
    const scrollContainer = ulRef.current;
    if (!scrollContainer) {
      console.error("No scrollContainer");
      return;
    }
    const links = scrollContainer.querySelectorAll<HTMLAnchorElement>("a");

    let isDown = false;
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

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
        links.forEach((link) => {
          link.classList.add("dragging");
        });
      }
      scrollContainer.scrollLeft = scrollLeft - deltaX;
    };

    const stopDrag = () => {
      isDown = false;
      scrollContainer.classList.remove("dragging");
      links.forEach((link) => {
        link.classList.remove("dragging");
      });
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

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("click", handleClick, true);
    scrollContainer.addEventListener("dragstart", handleDragStart);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("click", handleClick, true);
      scrollContainer.removeEventListener("dragstart", handleDragStart);
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
    </nav>
  );
}
