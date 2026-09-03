"use client";

import { useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";

import { useStore } from "@/stores/useStore";
import handleClickFirstLink from "@/functions/main-description/handleClickFirstLink";
import ArticleMetaData from "@/components/main-description/HeadingLinkId/ArticleMetaData";

interface HeadingLinkIdProps {
  headingNumber: 1 | 2 | 3;
  /**
   * "YYYY-MM-DD"
   */
  lastUpdated?: string;
  children: string;
}

export default function HeadingLinkId({
  headingNumber,
  lastUpdated,
  children,
}: HeadingLinkIdProps) {
  const addArticleHeading = useStore((state) => state.addArticleHeading);
  const Tag = `h${headingNumber}` as "h1" | "h2" | "h3";
  useLayoutEffect(() => {
    addArticleHeading({
      tag: Tag,
      content: children,
    });
  }, [addArticleHeading, Tag, children]);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const id = children.replaceAll(" ", "-").toLowerCase();
  // This is for a new window targeted to a hash to scroll smoothly.
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) {
      console.error("No heading");
      return;
    }

    heading.id = id;
  }, [id]);

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
        lastUpdated={lastUpdated}
      />
    </Tag>
  );
}
