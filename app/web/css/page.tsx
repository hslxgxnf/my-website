import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "CSS",
};

export default function CSSPage() {
  return (
    <main className={styles.main}>
      <aside></aside>
      <article>
        <h1>CSS</h1>
        <hr />
        <HeadingLinkPage>Connecting CSS to HTML</HeadingLinkPage>
        <HeadingLinkPage>Naming Rules</HeadingLinkPage>
        <HeadingLinkPage>Comments</HeadingLinkPage>
        <HeadingLinkPage>At-Rules</HeadingLinkPage>
        <HeadingLinkPage>Rulesets</HeadingLinkPage>
        <HeadingLinkPage>Selectors and Combinators</HeadingLinkPage>
        <HeadingLinkPage>Declarations</HeadingLinkPage>
        <HeadingLinkPage>Error Handling</HeadingLinkPage>
      </article>
      <aside></aside>
    </main>
  );
}
