"use client";

import { useRef, useState, useEffect } from "react";

import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderPath from "@/components/header/HeaderPath";

interface HeaderProps {
  links: string[];
}

export default function Header({ links }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      console.error("No header");
      return;
    }

    function preventScroll(event: WheelEvent | TouchEvent) {
      if (!isOpen) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target && target.closest("ul")) {
        return;
      }

      event.preventDefault();
    }

    header.addEventListener("wheel", preventScroll, { passive: false });
    header.addEventListener("touchmove", preventScroll, {
      passive: false,
    });

    return () => {
      header.removeEventListener("wheel", preventScroll);
      header.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef}>
      <HeaderLinks links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderPath />
    </header>
  );
}
