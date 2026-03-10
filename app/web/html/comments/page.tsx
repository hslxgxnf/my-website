import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { code, reference } from "@/app/web/html/comments/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import HighlightCode from "@/components/detail-page/HighlightCode";

export const metadata: Metadata = {
  title: "Comments",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Comments</HeadingLinkId>
        </ReferenceButton>
        <HighlightCode code={code} />
      </article>

      <aside></aside>
    </main>
  );
}
