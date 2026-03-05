import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "At-Rules",
};

export default function AtRulesPage() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>At-Rules</h1>
        <HeadingLinkPage>Basics</HeadingLinkPage>
        <hr />
        <h2>Statement At-Rules</h2>
        <HeadingLinkPage>@layer</HeadingLinkPage>
        <HeadingLinkPage>@import</HeadingLinkPage>
        <hr />
        <h2>Block At-Rules</h2>
        <HeadingLinkPage>@layer</HeadingLinkPage>
        <HeadingLinkPage>@media</HeadingLinkPage>
        <HeadingLinkPage>@container</HeadingLinkPage>
        <HeadingLinkPage>@scope</HeadingLinkPage>
        <HeadingLinkPage>@property</HeadingLinkPage>
        <HeadingLinkPage>@font-face</HeadingLinkPage>
        <HeadingLinkPage>@keyframes</HeadingLinkPage>
        <HeadingLinkPage>@starting-style</HeadingLinkPage>
        <HeadingLinkPage>@page</HeadingLinkPage>
        <HeadingLinkPage>@supports</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
