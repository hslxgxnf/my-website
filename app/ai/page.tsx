import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
// import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "AI",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>AI</h1>
        <hr />
        <h2>Sub Title</h2>
        {/*<HeadingLinkPage>Target Page</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
