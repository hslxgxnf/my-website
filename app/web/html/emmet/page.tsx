import type { Metadata } from "next";

import ClientMain from "@/app/web/html/emmet/ClientMain";

export const metadata: Metadata = {
  title: "Emmet",
};

export default function EmmetPage() {
  return <ClientMain />;
}
