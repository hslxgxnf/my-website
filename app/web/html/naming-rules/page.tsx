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
          A custom name or a custom value of an attribute should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
        </p>
        <ul>
          <li>
            <Highlight type="simple-code">id="div-a"</Highlight>
          </li>
          <li>
            <Highlight type="simple-code">data-is-clicked="true"</Highlight>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
