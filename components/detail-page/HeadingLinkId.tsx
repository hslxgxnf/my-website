"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

import handleClickFirstLink from "@/functions/detail-page/handleClickFirstLink";

interface HeadingLinkIdProps {
  headingNumber: number;
  children: string;
}

export default function HeadingLinkId({
  headingNumber,
  children,
}: HeadingLinkIdProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const id = children.replaceAll(" ", "-").toLowerCase();

  // This is for smooth hash scroll in a new window.
  useEffect(() => {
    if (!headingRef.current) throw new Error("No headingRef");

    headingRef.current.id = id;
  }, [id]);

  const Tag = `h${headingNumber}` as "h1" | "h2" | "h3";
  const href = `#${id}`;

  return (
    <Tag ref={headingRef}>
      <Link
        href={href}
        onClick={
          headingNumber === 1 ? (e) => handleClickFirstLink(e, href) : undefined
        }
      >
        {children}
      </Link>{" "}
      <span>#</span>
    </Tag>
  );
}
