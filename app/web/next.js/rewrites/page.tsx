import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, code } from "./data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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
