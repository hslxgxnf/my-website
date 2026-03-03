import type { Metadata } from "next";

import ClientMain from "@/app/web/html/attributes/ClientMain";

export const metadata: Metadata = {
  title: "Attributes",
};

export default function AttributesPage() {
  return <ClientMain />;
}
