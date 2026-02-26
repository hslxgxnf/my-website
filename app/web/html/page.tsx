import type { Metadata } from "next";

import styles from "@/styles/pages/start/page.module.css";
import HeadingLink from "@/components/pages/start/HeadingLink";

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
        <HeadingLink>Naming Rules</HeadingLink>
        <HeadingLink>Comments</HeadingLink>
        <HeadingLink>Elements</HeadingLink>
        <HeadingLink>Attributes</HeadingLink>
        <HeadingLink>Entities</HeadingLink>
        <HeadingLink>Emmet</HeadingLink>
      </article>
      <aside></aside>
    </main>
  );
}
