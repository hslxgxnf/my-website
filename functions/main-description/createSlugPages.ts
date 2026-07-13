import type { Metadata } from "next";
import React from "react";

import type { Pages } from "@/types/main/interfaces";
import toTitleCase from "@/functions/all/toTitleCase";

interface SlugProps {
  params: Promise<{ slug: string }>;
}

export default function createSlugPages(pages: Pages) {
  async function generateMetadata({ params }: SlugProps): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const title = toTitleCase(decodedSlug);
    return { title };
  }

  async function Page({ params }: SlugProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    const TargetPage = pages.get(decodedSlug);
    if (!TargetPage) {
      console.error("No TargetPage");
      return null;
    }

    return React.createElement(TargetPage);
  }

  return { generateMetadata, Page };
}
