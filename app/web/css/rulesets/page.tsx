import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, code } from "./data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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
          <HeadingLinkId headingNumber={1}>Rulesets</HeadingLinkId>
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
