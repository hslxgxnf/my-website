import type { Metadata } from "next";

// import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
// import ReferenceButton from "@/components/main/ReferenceButton";
// import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main>
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
