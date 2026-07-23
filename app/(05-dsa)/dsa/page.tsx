import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "DSA",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>DSA (Data Structures and Algorithms)</h1>
        <hr />
        <h2>Data Structures</h2>
        <HeadingLinkPage>Array</HeadingLinkPage>
        <hr />
        <h2>Algorithms</h2>
        <HeadingLinkPage>Asymptotic Analysis</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
