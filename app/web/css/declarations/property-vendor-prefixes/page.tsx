import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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
            <Highlight type="simple-code">-webkit-</Highlight>
            <br />
            Almost All Browsers
          </li>
          <li>
            <Highlight type="simple-code">-moz-</Highlight>
            <br />
            Firefox
          </li>
          <li>
            <Highlight type="simple-code">-o-</Highlight>
            <br />
            Old Opera
          </li>
          <li>
            <Highlight type="simple-code">-ms-</Highlight>
            <br />
            Old Edge and IE
          </li>
        </ul>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
