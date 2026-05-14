import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

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
          <HeadingLinkId headingNumber={1} publishedAt="2026-02-21">
            rewrites
          </HeadingLinkId>
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
