import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

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
          <HeadingLinkId headingNumber={1}>
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
