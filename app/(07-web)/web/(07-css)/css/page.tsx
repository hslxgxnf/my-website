import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "CSS",
};

export default function Page() {
  return (
    <main>
      <aside>
        <RefNav />
      </aside>

      <article>
        <h1>CSS (Cascading Style Sheets)</h1>
        <hr />
        <HeadingLinkPage>Connecting CSS to HTML</HeadingLinkPage>
        <HeadingLinkPage>Comments</HeadingLinkPage>
        <HeadingLinkPage>Naming Cases</HeadingLinkPage>
        <HeadingLinkPage>At-Rules</HeadingLinkPage>
        <HeadingLinkPage>Rulesets</HeadingLinkPage>
        {/*<HeadingLinkPage>Selectors and Combinators</HeadingLinkPage>*/}
        <HeadingLinkPage>Declarations</HeadingLinkPage>
        {/*<HeadingLinkPage>Error Handling</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
