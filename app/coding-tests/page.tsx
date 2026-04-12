import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
// import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

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
        <h2>Sub Title</h2>
        {/*<HeadingLinkPage>Target Page</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
