"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toTitleCase from "@/functions/all/toTitleCase";

export default function TitleValidator() {
  const path = usePathname();

  useEffect(() => {
    const pivotPath = toTitleCase(path.split("/").pop()!);
    if (!pivotPath) {
      return; // Home
    }

    function validate(): boolean {
      const titleElement = document.querySelector<HTMLTitleElement>("title");
      if (!titleElement || !titleElement.textContent) {
        return false;
      }

      const titleText = titleElement.textContent.split(" | ")[0];
      if (titleText !== pivotPath) {
        console.error(
          `titleText: ${titleText} must be the same as pivotPath: ${pivotPath}.`,
        );
        return false;
      }

      const articleH1 = document.querySelector<HTMLHeadingElement>(
        "body > main > article h1",
      );
      if (!articleH1) {
        console.error("No articleH1");
        return false;
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
        return false;
      }

      return true;
    }

    let headObserver: MutationObserver | null = null;

    // If the title element is present, validate it immediately.
    if (validate()) {
      return;
    }

    // If the title element is not present, wait for it to be added.
    headObserver = new MutationObserver(() => {
      validate();
    });
    headObserver.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      if (headObserver) {
        headObserver.disconnect();
      }
    };
  }, [path]);

  return null;
}
