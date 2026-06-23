"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/main-description-&-list/page.module.scss";
import type { Site } from "@/types/main/interfaces";

interface ReferenceNavImageProps {
  site: Site;
}
export default function ReferenceNavImage({ site }: ReferenceNavImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={isLoading ? styles.loading : undefined}>
      <Image
        src={site.favicon}
        alt={site.name}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
