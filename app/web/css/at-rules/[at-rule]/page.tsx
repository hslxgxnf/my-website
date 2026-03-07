import type { Metadata } from "next";
import { JSX } from "react";

import styles from "@/styles/detail-page/page.module.css";
import LayerPage from "@/app/web/css/at-rules/_@layer/page";

interface PageProps {
  params: Promise<{ "at-rule": string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const result = await params;
  const decodedResult = decodeURIComponent(result["at-rule"]);

  return {
    title: decodedResult,
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const staticParams = [
    "@import",
    "@layer",
    "@container",
    "@font-face",
    "@keyframes",
    "@media",
    "@page",
    "@property",
    "@scope",
    "@starting-style",
    "@supports",
  ];

  return staticParams.map((staticParam) => ({
    "at-rule": staticParam,
  }));
}

const pages: Record<string, () => JSX.Element> = {
  "@layer": LayerPage,
};

export default async function Page({ params }: PageProps) {
  const result = await params;
  const decodedResult = decodeURIComponent(result["at-rule"]);

  const TargetPage = pages[decodedResult];

  return <TargetPage />;
}
