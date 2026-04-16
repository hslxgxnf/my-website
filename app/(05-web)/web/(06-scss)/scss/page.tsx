import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId";
// import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "SCSS",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1}>SCSS</HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Variables</HeadingLinkId>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Statements</HeadingLinkId>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>At-Rules</HeadingLinkId>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
