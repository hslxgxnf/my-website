import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "CSS",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          CSS (Cascading Style Sheets)
        </Heading>
        <hr />
        <Heading type="link-page" number={3}>
          Connecting CSS to HTML
        </Heading>
        <Heading type="link-page" number={3}>
          Comments
        </Heading>
        <Heading type="link-page" number={3}>
          Naming Cases
        </Heading>
        <Heading type="link-page" number={3}>
          At-Rules
        </Heading>
        <Heading type="link-page" number={3}>
          Rulesets
        </Heading>
        {/*<Heading type="link-page" number={3}>*/}
        {/*  Selectors and Combinators*/}
        {/*</Heading>*/}
        <Heading type="link-page" number={3}>
          Declarations
        </Heading>
        {/*<Heading type="link-page" number={3}>*/}
        {/*  Error Handling*/}
        {/*</Heading>*/}
      </article>

      <PageNav />
    </main>
  );
}
