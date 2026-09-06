import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/styles.scss";
import TouchInitializer from "@/components/all/TouchInitializer";
import StoreInitializer from "@/components/all/StoreInitializer";
import Header from "@/components/header/Header";
import NewWindowHashScroll from "@/components/all/NewWindowHashScroll";
import TitleValidator from "@/components/all/TitleValidator";

export const metadata: Metadata = {
  title: { default: "HSLee Dev", template: "%s | HSLee Dev" },
  description: "Hoseon Lee Development Blog",
  generator: "Next.js (Deployed on Vercel)",
  creator: "Hoseon Lee",
  publisher: "Hoseon Lee",

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "HSLee Dev",
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    other: {
      "naver-site-verification": "4230f2aba428933fa6f21b449a85c3b0a946fce6",
    },
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
export default function Layout({ children }: { children: ReactNode }) {
  const devOnly = process.env.NODE_ENV === "development";
  const prodOnly = process.env.NODE_ENV === "production";

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${roboto.variable} ${roboto_mono.variable}`}
    >
      <body>
        <TouchInitializer />
        <StoreInitializer />

        <Header
          links={[
            "Windows",
            "IDE Settings",
            "Git & GitHub",
            "Clean Code",
            "DSA",
            "Problems",
            "Web",
            "AI",
          ]}
        />

        {/*main*/}
        {children}

        <footer>
          <p>&copy; 2026 HSLee Dev</p>
        </footer>

        <NewWindowHashScroll />
        {devOnly && <TitleValidator />}
        {prodOnly && (
          <>
            <Analytics debug={false} />
            <SpeedInsights debug={false} />
          </>
        )}
      </body>
    </html>
  );
}
