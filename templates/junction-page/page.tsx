import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
// import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Something",
};

export default function SomethingPage() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article></article>

      <aside></aside>
    </main>
  );
}
