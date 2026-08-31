"use client";

import HeaderMainNavSubNav1 from "@/components/header/HeaderMainNavSubNav1";
import HeaderMainNavSubNav2 from "@/components/header/HeaderMainNavSubNav2";
import HeaderMainNavSubNav3 from "@/components/header/HeaderMainNavSubNav3";

interface HeaderLinksProps {
  links: string[];
}

export default function HeaderMainNav({ links }: HeaderLinksProps) {
  return (
    <nav aria-label="Main Navigation">
      <HeaderMainNavSubNav1 />
      <HeaderMainNavSubNav2 links={links} />
      <HeaderMainNavSubNav3 links={links} />
    </nav>
  );
}
