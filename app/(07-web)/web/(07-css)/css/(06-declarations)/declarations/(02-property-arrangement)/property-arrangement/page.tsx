import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import {
  reference,
  customPropertiesCode,
  nonCustomPropertiesCode,
} from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

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
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-02-22">
              Property Arrangement
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Custom Properties</HeadingLinkId>
          <Highlight type="complex-code">{customPropertiesCode}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Non-Custom Properties</HeadingLinkId>
          <Highlight type="complex-code">{nonCustomPropertiesCode}</Highlight>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
