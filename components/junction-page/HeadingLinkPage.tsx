"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeadingLinkPageProps {
  children: string;
}

export default function HeadingLinkPage({ children }: HeadingLinkPageProps) {
  const currentPath = usePathname();
  const nextPath = children.replaceAll(" ", "-").toLowerCase();
  const url = `${currentPath}/${nextPath}`;

  return (
    <h3>
      <Link href={url}>{children}</Link>
    </h3>
  );
}
