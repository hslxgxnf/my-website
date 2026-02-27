import { Roboto, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";

import "@/styles/root-layout/layout.css";
import logo from "@/assets/logo.png";
import HeaderLink from "@/components/root-layout/HeaderLink";
import HeaderPath from "@/components/root-layout/HeaderPath";

// Google Font Initialization
const roboto = Roboto();
const robotoMono = Roboto_Mono();

export const metadata: Metadata = {
  title: { default: "HSLee Dev", template: "%s | HSLee Dev" },
  description: "Hoseon Lee Development Blog",
  generator: "Next.js",
  creator: "Hoseon Lee",
  publisher: "Vercel",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <header>
          <nav>
            <Link href="/">
              <Image
                src={logo}
                alt="logo image generate by ChatGPT"
                loading="eager"
              />
            </Link>

            <ul>
              <li>
                <HeaderLink href="/ide-settings">IDE Settings</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/dsa">DSA</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/coding-tests">Coding Tests</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/clean-code">Clean Code</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/web">Web</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/ai">AI</HeaderLink>
              </li>
            </ul>
          </nav>

          <nav>
            <div></div>
            <HeaderPath />
            <div></div>
          </nav>
        </header>

        {/*main*/}
        {children}

        <footer>
          <p>&copy; 2026 HSLee Dev</p>
        </footer>
      </body>
    </html>
  );
}
