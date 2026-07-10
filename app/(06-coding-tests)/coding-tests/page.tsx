import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Coding Tests",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>Coding Tests</h1>
        <hr />
        <HeadingLinkPage>Move All Zeroes to End</HeadingLinkPage>
        <HeadingLinkPage>Reverse an Array</HeadingLinkPage>
        <HeadingLinkPage>Second Largest</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
