import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/css/at-rules/basics/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

export const metadata: Metadata = {
  title: "Basics",
};

export default function BasicsPage() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference}></ReferenceNav>
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Basics</HeadingLinkId>
        </ReferenceButton>
        <p>At-rules instruct CSS how to behave.</p>
        <p>
          At-rules begin with an at-sign <code className="example">@</code>.
        </p>
        <p>Statement at-rules end with a semicolon.</p>
        <p>
          Block at-rules end in a <code className="example">&#x7b;&#x7d;</code>{" "}
          block.
        </p>
        <p>Some at-rules use at-rule functions and at-rule descriptors. </p>
        <p>
          Some at-rules (<code className="example">@media</code>,{" "}
          <code className="example">@supports</code>,{" "}
          <code className="example">@layer</code>,{" "}
          <code className="example">@scope</code>,{" "}
          <code className="example">@container</code>,{" "}
          <code className="example">@starting-style</code>) can be nested.
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
