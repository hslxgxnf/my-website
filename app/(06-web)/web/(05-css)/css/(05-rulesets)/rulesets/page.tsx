import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Rulesets",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} publishedAt="2026-02-18">
            Rulesets
          </HeadingLinkId>
        </ReferenceButton>
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
        <p>Selectors, properties, and values are case-insensitive.</p>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
