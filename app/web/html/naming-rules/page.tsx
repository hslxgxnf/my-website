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
          A custom name or a custom value of an attribute should&nbsp;
          <code className="emphasis">kebab-case</code>.
          <br />
          <code className="example">data-is-clicked=&quot;true&quot;</code>
          &nbsp;
          <code className="example">id=&quot;div-a&quot;</code>
        </p>
      </article>
      <aside></aside>
    </main>
  );
}
