"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import changeToTitleCase from "@/functions/changeToTitleCase";

export default function TitleValidator() {
  const path = usePathname();

  useEffect(() => {
    const pivotPath = changeToTitleCase(path.split("/").pop()!);
    if (!pivotPath) return;

    const titleText = document.title.split(" | ")[0];
    if (titleText !== pivotPath)
      throw new Error(
        `titleText: ${titleText} must be the same as path: ${pivotPath}.`,
      );

    const articleHeading = document.querySelector<HTMLHeadingElement>(
      "body > main > article h1",
    )!;
    const articleHeadingText =
      articleHeading.childElementCount > 0
        ? articleHeading.children[0].textContent
        : articleHeading.textContent;

    if (articleHeadingText !== pivotPath)
      throw new Error(
        `articleHeadingText: ${articleHeadingText} must be the same as path: ${pivotPath}.`,
      );
  }, [path]);

  return null;
}
