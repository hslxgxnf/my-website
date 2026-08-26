"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toTitleCase from "@/functions/all/toTitleCase";

export default function TitleValidator() {
  const path = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      const pivotPath = toTitleCase(path.split("/").pop()!);
      if (!pivotPath) {
        return; // Home
      }

      const title = document.querySelector<HTMLTitleElement>("head title");
      if (!title) {
        console.error("No title");
        return;
      }
      const titleText = title.textContent.split(" | ")[0];
      if (titleText !== pivotPath) {
        console.error(
          `titleText: ${titleText} must be the same as pivotPath: ${pivotPath}.`,
        );
        return;
      }

      const articleH1 = document.querySelector<HTMLHeadingElement>(
        "body > main > article h1",
      );
      if (!articleH1) {
        console.error("No articleH1");
        return;
      }
      let articleH1Text =
        articleH1.childElementCount > 0
          ? articleH1.children[0].textContent // main-description
          : articleH1.textContent; // main-list
      articleH1Text = articleH1Text.split("(")[0].trim();
      if (articleH1Text !== pivotPath) {
        console.error(
          `articleH1Text: ${articleH1Text} must be the same as pivotPath: ${pivotPath}.`,
        );
        return;
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [path]);

  return null;
}
