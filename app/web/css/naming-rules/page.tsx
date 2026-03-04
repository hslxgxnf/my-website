import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

export const metadata: Metadata = {
  title: "Naming Rules",
};

export default function NamingRulesPage() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <HeadingLinkId headingNumber={1}>Naming Rules</HeadingLinkId>
        <p>
          CSS variable names should be{" "}
          <code className="emphasis">kebab-case</code>.
        </p>
        <ul>
          <li>
            <code className="example">--space-10</code>
          </li>
          <li>
            <code className="example">--color-base</code>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
