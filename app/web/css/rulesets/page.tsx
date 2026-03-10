import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, code } from "@/app/web/css/rulesets/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import HighlightCode from "@/components/detail-page/HighlightCode";

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
          A declaration block <code className="example">&#123;&#125;</code>{" "}
          contains one or more declarations.
        </p>
        <p>
          A declaration <code className="example">Property: Value;</code> sets a
          value for a property.
        </p>
        <p>Selectors, properties, and values are case-insensitive.</p>
        <HighlightCode code={code} />
      </article>

      <aside></aside>
    </main>
  );
}
