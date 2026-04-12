import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Naming Cases",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <HeadingLinkId headingNumber={1}>Naming Cases</HeadingLinkId>
        <p>
          CSS variable names should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
          <br />
          <Highlight type="simple-code">--space-10</Highlight>{" "}
          <Highlight type="simple-code">--color-base</Highlight>
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
