import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Basics",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Basics</HeadingLinkId>
        </ReferenceButton>
        <p>At-rules instruct CSS how to behave.</p>
        <p>
          At-rules begin with an at-sign{" "}
          <Highlight type="simple-code">@</Highlight>.
        </p>
        <p>Statement at-rules end with a semicolon.</p>
        <p>
          Block at-rules end in a{" "}
          <Highlight type="simple-code">&#x7b;&#x7d;</Highlight> block.
        </p>
        <p>Some at-rules use at-rule functions and at-rule descriptors. </p>
        <p>
          Some at-rules (<Highlight type="simple-code">@container</Highlight>,{" "}
          <Highlight type="simple-code">@layer</Highlight>,{" "}
          <Highlight type="simple-code">@media</Highlight>,{" "}
          <Highlight type="simple-code">@scope</Highlight>,{" "}
          <Highlight type="simple-code">@starting-style</Highlight>,{" "}
          <Highlight type="simple-code">@supports</Highlight>) can be nested.
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
