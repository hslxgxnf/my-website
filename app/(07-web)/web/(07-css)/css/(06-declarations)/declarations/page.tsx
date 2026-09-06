import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Declarations",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <h1>Declarations</h1>
        <hr />
        <HeadingLinkPage>Property Vendor Prefixes</HeadingLinkPage>
        <HeadingLinkPage>Property Arrangement</HeadingLinkPage>
      </article>

      <PageNav />
    </main>
  );
}
