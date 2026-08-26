import type { Metadata } from "next";

import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "DSA",
};

export default function Page() {
  return (
    <main>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <h1>DSA (Data Structures and Algorithms)</h1>
        </ReferenceButton>
        <hr />
        <ReferenceButton>
          <h2>Linear Data Structures</h2>
        </ReferenceButton>
        <HeadingLinkPage>Array</HeadingLinkPage>
        <HeadingLinkPage>List</HeadingLinkPage>
        <hr />
        <ReferenceButton>
          <h2>Non-Linear Data Structures</h2>
        </ReferenceButton>
        <hr />
        <h2>Algorithms</h2>
        <HeadingLinkPage>Asymptotic Analysis</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
