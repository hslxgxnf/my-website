import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/html/emmet/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

export const metadata: Metadata = {
  title: "Emmet",
};

export default function EmmetPage() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Emmet</HeadingLinkId>
        </ReferenceButton>
        <ul>
          <li>
            <code className="example">div.container&#x7b;content&#x7d;</code>
          </li>
          <li>
            <code className="example">p&gt;lorem100</code>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
