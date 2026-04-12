import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
