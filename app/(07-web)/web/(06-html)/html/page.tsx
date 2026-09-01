import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "HTML",
};

export default function Page() {
  return (
    <main>
      <aside>
        <RefNav />
      </aside>

      <article>
        <h1>HTML (HyperText Markup Language)</h1>
        <hr />
        <HeadingLinkPage>Comments</HeadingLinkPage>
        <HeadingLinkPage>Naming Cases</HeadingLinkPage>
        <HeadingLinkPage>Elements</HeadingLinkPage>
        <HeadingLinkPage>Attributes</HeadingLinkPage>
        <HeadingLinkPage>Entities</HeadingLinkPage>
        <HeadingLinkPage>Emmet</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
