import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

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
