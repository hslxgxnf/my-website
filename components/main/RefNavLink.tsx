"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import type { Site } from "@/types/main/interfaces";
import setTooltip from "@/functions/main/setTooltip";

interface ReferenceNavImageProps {
  site: Site;
}
export default function RefNavLink({ site }: ReferenceNavImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  let spanText: string;
  if (site.name === "self") {
    spanText = site.title;
  } else if (site.title === "") {
    spanText = site.name;
  } else {
    spanText = `${site.name} | ${site.title}`;
  }

  return (
    <Link href={site.url} target="_blank" rel="noopener">
      <div className={isLoading ? "loading" : undefined}>
        <Image
          src={site.favicon}
          alt={site.name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <span onMouseEnter={setTooltip}>{spanText}</span>
    </Link>
  );
}
