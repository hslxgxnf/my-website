"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import Link from "next/link";

import { useStore } from "@/stores/useStore";
import handleClickFirstLink from "@/functions/main-description/handleClickFirstLink";
import ArticleMetaData from "@/components/main/Heading/ArticleMetaData";

interface HeadingLinkIdProps {
  number: number;
  lastUpdated?: string;
  children: string;
}

export default function HeadingLinkId({
  number,
  lastUpdated,
  children,
}: HeadingLinkIdProps) {
  const addArticleHeading = useStore((state) => state.addArticleHeading);
  const Tag = `h${number}` as "h1" | "h2" | "h3";
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
    <Tag ref={headingRef} className="heading-link-id">
      <Link
        href={href}
        onClick={
          number === 1 ? (e) => handleClickFirstLink(e, href) : undefined
        }
      >
        {children} <span aria-hidden="true">#</span>
      </Link>
      <ArticleMetaData number={number} lastUpdated={lastUpdated} />
    </Tag>
  );
}
