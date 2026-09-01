import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "DSA",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <h1>DSA (Data Structures and Algorithms)</h1>
        </RefButton>
        <hr />
        <RefButton>
          <h2>Linear Data Structures</h2>
        </RefButton>
        <HeadingLinkPage>Array</HeadingLinkPage>
        <HeadingLinkPage>List</HeadingLinkPage>
        <hr />
        <RefButton>
          <h2>Non-Linear Data Structures</h2>
        </RefButton>
        <hr />
        <h2>Algorithms</h2>
        <HeadingLinkPage>Asymptotic Analysis</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
