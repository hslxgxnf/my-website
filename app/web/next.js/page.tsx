import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>Next.js</h1>
        <hr />
        <HeadingLinkPage>rewrites</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
