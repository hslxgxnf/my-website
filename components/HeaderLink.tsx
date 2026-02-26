"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
}

export default function HeaderLink({ href, children }: HeaderLinkProps) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
