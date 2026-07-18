import { Roboto, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/all/layout.scss";
import Header from "@/components/header/Header";
import NewWindowHashScroll from "@/components/all/NewWindowHashScroll";
import TitleValidator from "@/components/all/TitleValidator";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${roboto.variable} ${roboto_mono.variable}`}
    >
      <body>
        <Header
          links={[
            "Windows",
            "IDE Settings",
            "Git & GitHub",
            "Clean Code",
            "DSA",
            "Coding Tests",
            "Web",
            "AI",
          ]}
        />

        {/*main*/}
        {children}

        <footer>
          <p>&copy; 2026 HSLee Dev</p>
        </footer>

        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
      <NewWindowHashScroll />
      <TitleValidator />
    </html>
  );
}
