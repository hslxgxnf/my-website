import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

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
          Custom attribute names should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
          <br />
          <Highlight type="simple-code">data-is-clicked="true"</Highlight>
        </p>
        <p>
          Attribute values should be{" "}
          <Highlight type="text">kebab-case</Highlight>.
          <br />
          <Highlight type="simple-code">id="target-container"</Highlight>
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
