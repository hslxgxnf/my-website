"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/main-description-&-list/page.module.scss";
import type { Site } from "@/types/main/interfaces";

interface ReferenceNavImageProps {
  site: Site;
}
export default function ReferenceNavLink({ site }: ReferenceNavImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  function handleMouseEnter(event: MouseEvent<HTMLAnchorElement>) {
    const span = event.currentTarget.querySelector("span");

    if (!span) {
      console.error("No span");
      return;
    }

    if (span.scrollWidth > span.clientWidth) {
      event.currentTarget.setAttribute("title", span.textContent);
    } else {
      event.currentTarget.removeAttribute("title");
    }
  }

  let spanText = "";
  if (site.name === "self") {
    spanText = site.title;
  } else {
    if (site.title === "") {
      spanText = site.name;
    } else {
      spanText = `${site.name} | ${site.title}`;
    }
  }

  return (
    <Link
      href={site.url}
      target="_blank"
      rel="noopener"
      onMouseEnter={handleMouseEnter}
    >
      <div className={isLoading ? styles.loading : undefined}>
        <Image
          src={site.favicon}
          alt={site.name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <span>{spanText}</span>
    </Link>
  );
}
