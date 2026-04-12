import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

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
        <h1>Next.js</h1>
        <hr />
        <HeadingLinkPage>rewrites</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
