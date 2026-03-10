import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, code } from "@/app/web/next.js/rewrites/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import HighlightCode from "@/components/detail-page/HighlightCode";

export const metadata: Metadata = {
  title: "rewrites",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>rewrites</HeadingLinkId>
        </ReferenceButton>
        <p>
          The <code className="example">rewrites</code> function can handle
          folder names starting with <code className="emphasis">@</code> as
          regular paths instead of parallel routes.
        </p>
        <HighlightCode code={code} />
        <p>
          This provides flexibility in routing, but the trade-off is that the
          page renders twice due to rewriting the path.
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
