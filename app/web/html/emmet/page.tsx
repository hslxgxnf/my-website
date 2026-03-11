import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/html/emmet/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";

export const metadata: Metadata = {
  title: "Emmet",
};

export default function Page() {
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
            <Highlight type="simple-code">
              div.container&#x7b;content&#x7d;
            </Highlight>
          </li>
          <li>
            <Highlight type="simple-code">p&gt;lorem100</Highlight>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
