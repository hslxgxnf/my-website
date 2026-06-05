import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Property Vendor Prefixes",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} publishedAt="2026-02-20">
            Property Vendor Prefixes
          </HeadingLinkId>
        </ReferenceButton>
        <ul>
          <li>
            <p>
              <Highlight type="simple-code">-webkit-</Highlight>
            </p>
            <p>Almost All Browsers</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">-moz-</Highlight>
            </p>
            <p>Firefox</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">-o-</Highlight>
            </p>
            <p>Old Opera</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">-ms-</Highlight>
            </p>
            <p>Old Edge and IE</p>
          </li>
        </ul>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
