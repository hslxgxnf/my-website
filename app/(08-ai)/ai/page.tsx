import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
// import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "AI",
};

export default function Page() {
  return (
    <main>
      <aside>
        <RefNav />
      </aside>

      <article>
        <h1>AI</h1>
        <hr />
        <h2>Preparing...</h2>
        {/*<HeadingLinkPage>Target Page</HeadingLinkPage>*/}
      </article>

      <aside></aside>
    </main>
  );
}
