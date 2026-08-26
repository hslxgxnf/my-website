import type { Metadata } from "next";

import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Declarations",
};

export default function Page() {
  return (
    <main>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>Declarations</h1>
        <hr />
        <HeadingLinkPage>Property Vendor Prefixes</HeadingLinkPage>
        <HeadingLinkPage>Property Arrangement</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
