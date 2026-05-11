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
        `document.title: ${documentTitle} must be the same as path: ${pivotPath}.`,
      );
    }

    const articleHeading1 = document.querySelector<HTMLHeadingElement>(
      "body > main > article h1",
    )!;
    const articleHeading1Text =
      articleHeading1.childElementCount > 0
        ? articleHeading1.children[0].textContent
        : articleHeading1.textContent;

    if (articleHeading1Text !== pivotPath) {
      console.error(
        `articleHeading1Text: ${articleHeading1Text} must be the same as path: ${pivotPath}.`,
      );
    }
  }, [path]);

  return null;
}
