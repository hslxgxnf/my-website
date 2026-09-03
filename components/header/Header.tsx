"use client";

import { useRef, useLayoutEffect } from "react";

import { useStore } from "@/stores/useStore";
import HeaderMainNav from "@/components/header/HeaderMainNav";
import HeaderArticleNav from "@/components/header/HeaderArticleNav";

interface HeaderProps {
  links: string[];
}

export default function Header({ links }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const setHeaderHeight = useStore((state) => state.setHeaderHeight);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) {
      console.error("No header");
      return;
    }

    setHeaderHeight(header.getBoundingClientRect().height);
  }, [setHeaderHeight]);

  return (
    <header ref={headerRef}>
      <HeaderMainNav links={links} />
      <HeaderArticleNav />
    </header>
  );
}
