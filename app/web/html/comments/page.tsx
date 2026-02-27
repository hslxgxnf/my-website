import type { Metadata } from "next";

import ClientMain from "@/app/web/html/comments/ClientMain";

export const metadata: Metadata = {
  title: "Comments",
};

export default function CommentsPage() {
  return <ClientMain />;
}
