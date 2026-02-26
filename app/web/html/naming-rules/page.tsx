import type { Metadata } from "next";

import styles from "@/styles/pages/detail/page.module.css";
import HeadingLink from "@/components/pages/detail/HeadingLink";

export const metadata: Metadata = {
  title: "Naming Rules",
};

export default function NamingRulesPage() {
  return (
    <main className={styles.main}>
      <aside></aside>
      <article>
        <HeadingLink headingNumber={1}>Naming Rules</HeadingLink>
        <p>
          Attribute custom names and values should be&nbsp;
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
