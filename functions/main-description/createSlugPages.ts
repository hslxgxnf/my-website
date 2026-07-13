import type { Metadata } from "next";

import type { Pages } from "@/types/main/interfaces";
import toTitleCase from "@/functions/all/toTitleCase";

interface SlugProps {
  params: Promise<{ slug: string }>;
}

export default function createSlugPages(pages: Pages) {
  async function generateMetadata({ params }: SlugProps): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    return { title: toTitleCase(decodedSlug) };
  }

  async function Page({ params }: SlugProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    return pages.get(decodedSlug);
  }

  return { generateMetadata, Page };
}
