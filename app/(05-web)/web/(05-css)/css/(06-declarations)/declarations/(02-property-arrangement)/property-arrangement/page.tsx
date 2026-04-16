import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference, customPropertiesCode, propertiesCode } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

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
            <HeadingLinkId headingNumber={1}>
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
          <Highlight type="complex-code">{propertiesCode}</Highlight>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
