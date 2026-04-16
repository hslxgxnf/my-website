import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "CSS",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>CSS</h1>
        <hr />
        <HeadingLinkPage>Connecting CSS to HTML</HeadingLinkPage>
        <HeadingLinkPage>Naming Cases</HeadingLinkPage>
        <HeadingLinkPage>Comments</HeadingLinkPage>
        <HeadingLinkPage>At-Rules</HeadingLinkPage>
        <HeadingLinkPage>Rulesets</HeadingLinkPage>
        {/*<HeadingLinkPage>Selectors and Combinators</HeadingLinkPage>*/}
        <HeadingLinkPage>Declarations</HeadingLinkPage>
        {/*<HeadingLinkPage>Error Handling</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
