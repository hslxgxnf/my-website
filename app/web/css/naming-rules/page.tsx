import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";

export const metadata: Metadata = {
  title: "Naming Rules",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <HeadingLinkId headingNumber={1}>Naming Rules</HeadingLinkId>
        <p>
          CSS variable names should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
          <br />
          <Highlight type="simple-code">--space-10</Highlight>{" "}
          <Highlight type="simple-code">--color-base</Highlight>
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
