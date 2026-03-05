import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
// import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Set this!!!",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article></article>

      <aside></aside>
    </main>
  );
}
