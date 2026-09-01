import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Vanilla",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <h1>Vanilla</h1>
        </RefButton>
        <hr />
        <HeadingLinkPage>Properties & Methods</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
