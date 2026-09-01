import type { Metadata } from "next";

import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Vanilla",
};

export default function Page() {
  return (
    <main>
      <ReferenceNav reference={reference} />

      <article>
        <ReferenceButton>
          <h1>Vanilla</h1>
        </ReferenceButton>
        <hr />
        <HeadingLinkPage>Properties & Methods</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
