import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Rulesets",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-21">
            Rulesets
          </HeadingLinkId>
        </RefButton>
        <p>
          A ruleset consists of a selector (or a group of selectors) paired with
          a declaration block.
        </p>
        <p>
          A declaration block{" "}
          <Highlight type="simple-code">&#123;&#125;</Highlight> contains one or
          more declarations.
        </p>
        <p>
          A declaration{" "}
          <Highlight type="simple-code">Property: Value;</Highlight> sets a
          value for a property.
        </p>
        <p>
          Declarations must end with a semicolon, except for the last one.
          Adding a semicolon to it is recommended, though.
        </p>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <PageNav />
    </main>
  );
}
