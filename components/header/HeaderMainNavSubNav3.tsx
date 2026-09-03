import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function HeaderMainNavSubNav3({ links }: { links: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  // Sync isOpenRef with isOpen to avoid re-binding event listeners.
  const isOpenRef = useRef<boolean>(isOpen);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);
  useEffect(() => {
    // Prevent background scroll when the menu is open.
    function preventScroll(event: WheelEvent | TouchEvent) {
      if (!isOpenRef.current) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target && target.closest("ul")?.classList.contains("menu")) {
        return;
      }

      event.preventDefault();
    }

    // Close the open menu and release focus when pressing the Escape key.
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

  const path = usePathname();
  const [prevPath, setPrevPath] = useState(path);
  // Close the open menu on page transition during render (avoiding useEffect).
  if (prevPath !== path) {
    setPrevPath(path);

    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-controls="dropdown-menu"
        aria-expanded={isOpen}
        className={isOpen ? "open" : undefined}
        onClick={handleClick}
      >
        {isOpen ? (
          <IoClose aria-hidden="true" />
        ) : (
          <IoMenu aria-hidden="true" />
        )}
      </button>

      <ul id="dropdown-menu" className={`menu ${isOpen ? "open" : ""}`}>
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
    </div>
  );
}
