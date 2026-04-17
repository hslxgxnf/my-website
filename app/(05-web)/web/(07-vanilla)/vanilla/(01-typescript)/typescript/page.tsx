import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
// import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
// import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
// import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "TypeScript",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <HeadingLinkId headingNumber={1}>TypeScript</HeadingLinkId>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
