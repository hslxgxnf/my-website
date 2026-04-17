import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

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
