import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

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
