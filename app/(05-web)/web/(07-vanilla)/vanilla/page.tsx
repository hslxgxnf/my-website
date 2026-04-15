import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkPage from "@/components/non-root/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Vanilla",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <h1>Vanilla</h1>
        </ReferenceButton>
        <hr />
        <HeadingLinkPage>TypeScript</HeadingLinkPage>
        <HeadingLinkPage>Properties & Methods</HeadingLinkPage>
      </article>
    </main>
  );
}
