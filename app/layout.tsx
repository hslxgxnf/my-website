import type { Metadata } from "next";
import { ReactNode } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/app-details/root/Header";
import Footer from "@/app-details/root/Footer";

// Google Font Initialization
const roboto = Roboto();
const robotoMono = Roboto_Mono();

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: { default: "HSLee Dev", template: "%s | HSLee Dev" },
  description: "Hoseon Lee Development Blog",
  generator: "Next.js",
  creator: "Hoseon Lee",
  publisher: "Vercel",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
