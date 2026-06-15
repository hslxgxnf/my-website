import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
// import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
// import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
// import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <HeadingLinkId headingNumber={1} lastUpdated="2026-06-15">
          Next.js
        </HeadingLinkId>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
