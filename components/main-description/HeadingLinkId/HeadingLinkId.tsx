"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

import handleClickFirstLink from "@/functions/main-description/handleClickFirstLink";
import ArticleMetaData from "@/components/main-description/HeadingLinkId/ArticleMetaData";

interface HeadingLinkIdProps {
  headingNumber: 1 | 2 | 3;
  /**
   * "YYYY-MM-DD"
   */
  publishedAt?: string;
  /**
   * "YYYY-MM-DD"
   * */
  updatedAt?: string;
  children: string;
}

export default function HeadingLinkId({
  headingNumber,
  publishedAt,
  updatedAt,
  children,
}: HeadingLinkIdProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const id = children.replaceAll(" ", "-").toLowerCase();

  // This is for a new window targeted to a hash to scroll smoothly.
  useEffect(() => {
    if (!headingRef.current) {
      console.error("No headingRef");
      return;
    }

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
      <ArticleMetaData
        headingNumber={headingNumber}
        publishedAt={publishedAt}
        updatedAt={updatedAt}
      />
    </Tag>
  );
}
