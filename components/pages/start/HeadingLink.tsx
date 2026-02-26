"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeadingLinkProps {
  children: string;
}

export default function HeadingLink({ children }: HeadingLinkProps) {
  const currentPath = usePathname();
  const nextPath = children.replaceAll(" ", "-").toLowerCase();
  const url = `${currentPath}/${nextPath}`;

  return (
    <h3>
      <Link href={url}>{children}</Link>
    </h3>
  );
}
