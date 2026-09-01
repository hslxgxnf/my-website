import type { Metadata } from "next";

// import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
// import RefButton from "@/components/main/RefButton";
// import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main>
      <RefNav /* reference={reference} */ />

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
