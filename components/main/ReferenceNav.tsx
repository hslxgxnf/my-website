"use client";

import Link from "next/link";
import Image from "next/image";

import type { Reference } from "@/types/main/interfaces";
import type { MouseEvent } from "react";

interface ReferenceNavProps {
  reference?: Reference;
}

export default function ReferenceNav({ reference }: ReferenceNavProps) {
  if (!reference) return null;

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

  return reference.map((referenceItem, index) => {
    return (
      <nav key={index} data-target={referenceItem.target}>
        <header>Reference</header>
        <main>
          <ul>
            {referenceItem.sites.map((site, index) => {
              if (site.name === "dummy") {
                console.error("Change this dummy image.");
                return null;
              } else if (site.name === "self") {
                return (
                  <li key={index} data-self>
                    <Link
                      href={site.url}
                      target="_blank"
                      rel="noopener"
                      onMouseEnter={handleMouseEnter}
                    >
                      <Image src={site.favicon} alt={site.name} />
                      <span>{site.title}</span>
                    </Link>
                  </li>
                );
              } else {
                let siteInfo = "";
                if (site.name === "none") {
                  siteInfo = site.title;
                } else {
                  if (site.title === "") {
                    siteInfo = site.name;
                  } else {
                    siteInfo = `${site.name} | ${site.title}`;
                  }
                }

                return (
                  <li key={index}>
                    <Link
                      href={site.url}
                      target="_blank"
                      rel="noopener"
                      onMouseEnter={handleMouseEnter}
                    >
                      <Image src={site.favicon} alt={site.name} />
                      <span>{siteInfo}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </main>
      </nav>
    );
  });
}
