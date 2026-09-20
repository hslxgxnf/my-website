import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Declarations",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          Declarations
        </Heading>
        <hr />
        <Heading type="link-page" number={3}>
          Property Vendor Prefixes
        </Heading>
        <Heading type="link-page" number={3}>
          Property Arrangement
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
