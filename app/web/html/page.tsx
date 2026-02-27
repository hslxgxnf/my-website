import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "HTML",
};

export default function HTMLPage() {
  return (
    <main className={styles.main}>
      <aside></aside>
      <article>
        <h1>HTML</h1>
        <hr />
        <HeadingLinkPage>Naming Rules</HeadingLinkPage>
        <HeadingLinkPage>Comments</HeadingLinkPage>
        <HeadingLinkPage>Elements</HeadingLinkPage>
        <HeadingLinkPage>Attributes</HeadingLinkPage>
        <HeadingLinkPage>Entities</HeadingLinkPage>
        <HeadingLinkPage>Emmet</HeadingLinkPage>
      </article>
      <aside></aside>
    </main>
  );
}
