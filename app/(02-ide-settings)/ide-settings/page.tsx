import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "IDE Settings",
};

export default function Page() {
  return (
    <main>
      <aside>
        <RefNav />
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
