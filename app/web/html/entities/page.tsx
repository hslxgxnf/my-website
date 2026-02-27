import type { Metadata } from "next";

import ClientMain from "@/app/web/html/entities/ClientMain";

export const metadata: Metadata = {
  title: "Entities",
};

export default function EntitiesPage() {
  return <ClientMain />;
}
