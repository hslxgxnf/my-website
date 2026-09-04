import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/constants/breakpoints";

export default function HeaderMainNavSubNav3({ links }: { links: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close the open navigation on page transition during render (avoiding useEffect).
  const path = usePathname();
  const [prevPath, setPrevPath] = useState(path);
  if (prevPath !== path) {
    setPrevPath(path);

    if (isOpen) {
      setIsOpen(false);
    }
  }

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  // Sync isOpenRef with isOpen to avoid re-binding event listeners.
  const isOpenRef = useRef<boolean>(isOpen);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);
  useEffect(() => {
    // Scope scrolling the open navigation.
    function preventScroll(event: WheelEvent | TouchEvent) {
      if (!isOpenRef.current) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target && target.closest("ul")?.classList.contains("target")) {
        return;
      }

      event.preventDefault();
    }

    // Close the open navigation and release focus when pressing the Escape key.
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpenRef.current) {
        return;
      }

      if (event.key === "Escape") {
        setIsOpen(false);

        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    }

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, {
      passive: false,
    });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav aria-label="Dropdown main navigation">
      <button
        type="button"
        aria-label="Toggle dropdown main navigation"
        aria-controls="dropdown-main-navigation"
        aria-expanded={isOpen}
        className={isOpen ? "open" : undefined}
        disabled={!isMobile}
        onClick={handleClick}
      >
        {isOpen ? (
          <IoClose aria-hidden="true" />
        ) : (
          <IoMenu aria-hidden="true" />
        )}
      </button>

      <ul
        id="dropdown-main-navigation"
        className={`target ${isOpen ? "open" : ""}`.trim()}
      >
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
    </nav>
  );
}
