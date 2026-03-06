import type { Metadata } from "next";
import { JSX } from "react";

import LayerPage from "@/app/web/css/at-rules/_@layer/page";

const pages: Record<string, () => JSX.Element> = {
  "@layer": LayerPage,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return {
    title: decodedSlug,
  };
}

export async function generateStaticParams() {
  const staticParams = [
    "@layer",
    "@import",
    "@media",
    "@container",
    "@scope",
    "@property",
    "@font-face",
    "@keyframes",
    "@starting-style",
    "@page",
    "@supports",
  ];

  return staticParams.map((staticParam) => ({
    slug: staticParam,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const TargetPage = pages[decodedSlug];

  if (!TargetPage) {
    // throw new Error("No TargetPage");
    return (
      <main>
        <aside></aside>
        <article>{decodedSlug}</article>
        <aside></aside>
      </main>
    );
  }

  return <TargetPage />;
}
