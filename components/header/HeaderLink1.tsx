"use client";

import HeaderLink1Nav1 from "@/components/header/HeaderLink1Nav1";
import HeaderLink1Nav2 from "@/components/header/HeaderLink1Nav2";
import HeaderLink1Nav3 from "@/components/header/HeaderLink1Nav3";

interface HeaderLinksProps {
  links: string[];
}

export default function HeaderLink1({ links }: HeaderLinksProps) {
  return (
    <nav>
      <HeaderLink1Nav1 />
      <HeaderLink1Nav2 links={links} />
      <HeaderLink1Nav3 links={links} />
    </nav>
  );
}
