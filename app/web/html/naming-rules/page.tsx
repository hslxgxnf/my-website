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
          Custom attribute names should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
          <br />
          <Highlight type="simple-code">data-is-clicked="true"</Highlight>
        </p>
        <p>
          Attribute values that are not enumerated should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
          <br />
          <Highlight type="simple-code">id="target-container"</Highlight>
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
