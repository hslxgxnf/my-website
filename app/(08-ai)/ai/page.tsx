import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "AI",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          AI
        </Heading>
        <hr />
        <Heading type="none" number={2}>
          Preparing...
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
