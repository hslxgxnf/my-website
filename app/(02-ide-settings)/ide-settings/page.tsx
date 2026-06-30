import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "IDE Settings",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>IDE Settings</h1>
        <hr />
        <HeadingLinkPage>JetBrains WebStorm</HeadingLinkPage>
        <HeadingLinkPage>JetBrains PyCharm</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
