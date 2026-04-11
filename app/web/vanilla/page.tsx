import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Vanilla",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>Vanilla</h1>
        <hr />
        <HeadingLinkPage>TypeScript</HeadingLinkPage>
        <HeadingLinkPage>Properties & Methods</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
