"use client";

import { IoIosLink } from "react-icons/io";
import { ReactNode, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./ReferenceButton.module.css";
import udemy from "@/assets/udemy.png";

interface Reference {
  url: string;
  name: string;
  title: string;
}

interface ReferenceButtonProps {
  reference: Array<Reference>;
  children: ReactNode;
}

export default function ReferenceButton({
  reference,
  children,
}: ReferenceButtonProps) {
  const container = useRef<HTMLElement>(null);

  function handleClick() {
    if (!container.current) throw new Error("No container");

    container.current.classList.toggle(styles.active);
  }

  return (
    <div className={styles["reference-button-container"]}>
      <button type="button" onClick={handleClick}>
        <IoIosLink />
      </button>

      <nav ref={container}>
        <header>Reference</header>
        <main>
          <ul>
            {reference.map((item) => {
              switch (item.name) {
                case "Udemy":
                  return (
                    <li key={item.url}>
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
