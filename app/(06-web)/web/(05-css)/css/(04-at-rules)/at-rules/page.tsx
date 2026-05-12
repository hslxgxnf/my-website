import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "At-Rules",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>At-Rules</h1>
        <hr />
        <HeadingLinkPage>Basics</HeadingLinkPage>
        <hr />
        <h2>Statement At-Rules</h2>
        <HeadingLinkPage>@import</HeadingLinkPage>
        <HeadingLinkPage>@layer</HeadingLinkPage>
        <hr />
        <h2>Block At-Rules</h2>
        {/*<HeadingLinkPage>@container</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@font-face</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@keyframes</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@layer</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@media</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@page</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@property</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@scope</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@starting-style</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>@supports</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
