import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "IDE Settings",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>IDE Settings</h1>
        <hr />
        <HeadingLinkPage>JetBrains WebStorm</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
