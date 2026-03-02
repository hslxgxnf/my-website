import type { Metadata } from "next";

import ClientMain from "@/app/web/html/elements/ClientMain";

export const metadata: Metadata = {
  title: "Elements",
};
export default function ElementsPage() {
  return <ClientMain />;
}
