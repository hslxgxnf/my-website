import type { Metadata } from "next";

import Main from "@/components/pages/detail/web/html/comments/Main";

export const metadata: Metadata = {
  title: "Comments",
};

export default function CommentsPage() {
  return <Main />;
}
