import { Roboto, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/root/layout/layout.scss";
import Header from "@/components/root/layout/Header/Header";
import NewWindowHashScroll from "@/components/root/layout/NewWindowHashScroll";
import TitleValidator from "@/components/root/layout/TitleValidator";

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

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header
          links={[
            "IDE Settings",
            "DSA",
            "Coding Tests",
            "Clean Code",
            "Web",
            "AI",
          ]}
        />

        {/*main*/}
        {children}

        <footer>
          <p>&copy; 2026 HSLee Dev</p>
        </footer>
      </body>
      <NewWindowHashScroll />
      <TitleValidator />
    </html>
  );
}
