import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
// import { reference, code } from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
// import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
// import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Set this!!!",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <HeadingLinkId headingNumber={1}>Title</HeadingLinkId>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
