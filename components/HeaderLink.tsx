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

  if (!path) throw new Error("No path");

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
