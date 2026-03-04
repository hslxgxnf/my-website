import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
// import data
// import ReferenceNav from "@/components/detail-page/ReferenceNav";
// import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
// import PreCode from "@/components/detail-page/PreCode";
// import PageNav from "@/components/detail-page/PageNav";

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
          CSS variable names <code className="example">--*</code> should be{" "}
          <code className="emphasis">kebab-case</code>.
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
