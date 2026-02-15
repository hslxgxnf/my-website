"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
}

export default function HeaderLink({ href, children }: HeaderLinkProps) {
  const path = usePathname();

  if (!path) throw new Error("pathname is required");

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
}
