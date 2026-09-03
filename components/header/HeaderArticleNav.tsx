"use client";

import { usePathname } from "next/navigation";

import toTitleCase from "@/functions/all/toTitleCase";
import HeaderArticleNavSubNav1 from "@/components/header/HeaderArticleNavSubNav1";
import HeaderArticleNavSubNav2 from "@/components/header/HeaderArticleNavSubNav2";
import HeaderArticleNavSubNav3 from "@/components/header/HeaderArticleNavSubNav3";

export interface Path {
  href: string;
  name: string;
}

export default function HeaderArticleNav() {
  const path = usePathname();
  const slicedPath: string[] = path.slice(1).split("/");
  const processedPath: Path[] = [];
  for (let i = 0; i < slicedPath.length; i++) {
    let href = "";
    for (let j = 0; j < i + 1; j++) {
      href = `${href}/${slicedPath[j]}`;
    }

    const name = toTitleCase(slicedPath[i]);

    processedPath.push({
      href,
      name,
    });
  }

  return (
    <nav aria-label="Article Navigation">
      <div aria-hidden="true"></div>

      <div>
        <HeaderArticleNavSubNav1 path={path} processedPath={processedPath} />

        <HeaderArticleNavSubNav2
          key={path} // Close the open menu on page transition.
          processedPath={processedPath}
        />

        <HeaderArticleNavSubNav3 path={path} />
      </div>
    </nav>
  );
}
