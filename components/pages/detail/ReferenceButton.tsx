"use client";

import { IoIosLink } from "react-icons/io";
import { ReactNode, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/pages/detail/page.module.css";
import type { Reference } from "@/types/interfaces";
import udemy from "@/assets/udemy.png";

interface ReferenceButtonProps {
  reference: Array<Reference>;
  children: ReactNode;
}

export default function ReferenceButton({
  reference,
  children,
}: ReferenceButtonProps) {
  const navRef = useRef<HTMLElement>(null);

  function handleClick() {
    if (!navRef.current) throw new Error("No navRef");

    navRef.current.classList.toggle(styles.active);
  }

  return (
    <div className={styles["reference-button-container"]}>
      <button type="button" onClick={handleClick}>
        <IoIosLink />
      </button>

      <nav ref={navRef}>
        <header>Reference</header>
        <main>
          <ul>
            {reference.map((item, index) => {
              switch (item.name) {
                case "Udemy":
                  return (
                    <li key={index}>
                      <Link href={item.url} target="_blank">
                        <Image src={udemy} alt={`${item.name} favicon`} />{" "}
                        {item.name} {item.title}
                      </Link>
                    </li>
                  );
                default:
                  throw new Error(
                    `Detected an unknown site name: ${item.name}`,
                  );
              }
            })}
          </ul>
        </main>
      </nav>

      {children}
    </div>
  );
}
