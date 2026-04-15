import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
// import { reference, code } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
// import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
// import HeadingLinkPage from "@/components/non-root/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>Title</h1>
        <hr />
        <h2>Sub Title</h2>
        {/*<HeadingLinkPage>Target Page</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
