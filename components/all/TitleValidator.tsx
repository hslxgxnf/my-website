"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import changeToTitleCase from "@/functions/all/changeToTitleCase";

export default function TitleValidator() {
  const path = usePathname();

  useEffect(() => {
    const pivotPath = changeToTitleCase(path.split("/").pop()!);
    if (!pivotPath) {
      return;
    }

    const documentTitle = document.title.split(" | ")[0];
    if (documentTitle !== pivotPath) {
      console.error(
        `documentTitle: ${documentTitle} must be the same as pivotPath: ${pivotPath}.`,
      );
    }

    const articleHeading1 = document.querySelector<HTMLHeadingElement>(
      "body > main > article h1",
    )!;
    let articleHeading1Text =
      articleHeading1.childElementCount > 0
        ? articleHeading1.children[0].textContent // main-description
        : articleHeading1.textContent; // main-list
    articleHeading1Text = articleHeading1Text.split("(")[0].trim();
    if (articleHeading1Text !== pivotPath) {
      console.error(
        `articleHeading1Text: ${articleHeading1Text} must be the same as pivotPath: ${pivotPath}.`,
      );
    }
  }, [path]);

  return null;
}
