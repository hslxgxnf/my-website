import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import {
  reference,
  code,
} from "@/app/web/css/declarations/property-arrangement/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";

export const metadata: Metadata = {
  title: "Property Arrangement",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Property Arrangement</HeadingLinkId>
        </ReferenceButton>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <aside></aside>
    </main>
  );
}
