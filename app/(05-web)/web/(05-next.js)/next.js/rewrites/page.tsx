import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

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
          The <Highlight type="simple-code">rewrites</Highlight> function can
          handle folder names starting with <Highlight type="text">@</Highlight>{" "}
          as regular paths instead of parallel routes.
        </p>
        <Highlight type="complex-code">{code}</Highlight>
        <p>
          This provides flexibility in routing, but the trade-off is that the
          page renders twice due to rewriting the path.
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
