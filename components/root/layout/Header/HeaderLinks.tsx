"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";

interface HeaderLinksProps {
  links: string[];
}

export default function HeaderLinks({ links }: HeaderLinksProps) {
  const path = usePathname();

  return (
    <nav>
      <Link href="/">
        <Image
          src={logo}
          alt="logo image generate by ChatGPT"
          loading="eager"
        />
      </Link>

      <ul>
        {links.map((link, index) => {
          const href = `/${link.replaceAll(" ", "-").toLowerCase()}`;

          return (
            <li key={index}>
              <Link
                href={href}
                className={path.startsWith(href) ? "active" : undefined}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
