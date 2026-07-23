import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Array",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-23">
            Array
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          Index-based access is fast <Highlight type="math">(O(1))</Highlight>.
        </p>
        <p>
          Insertion and deletion are slow{" "}
          <Highlight type="math">(O(n))</Highlight>, except at the end.
        </p>
        <p>There are fixed-size arrays and dynamic-size arrays.</p>
        <p>There are one-dimensional arrays and multi-dimensional arrays.</p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
