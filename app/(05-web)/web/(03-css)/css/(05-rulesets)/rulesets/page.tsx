import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

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
