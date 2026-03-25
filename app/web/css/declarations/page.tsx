import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Declarations",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>Declarations</h1>
        <hr />
        <HeadingLinkPage>Property Arrangement</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
