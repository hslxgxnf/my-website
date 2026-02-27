import type { Metadata } from "next";

import ClientMain from "@/app/clean-code/ClientMain";

export const metadata: Metadata = {
  title: "Clean Code",
};

export default function CleanCodePage() {
  return <ClientMain />;
}
