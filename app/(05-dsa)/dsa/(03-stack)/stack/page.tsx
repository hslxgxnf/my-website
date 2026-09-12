import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Stack",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-09-12">
            Stack
          </HeadingLinkId>
        </RefButton>
        <p>LIFO (Last In, First Out)</p>
        <p>
          Data access is only possible at the top{" "}
          <Highlight type="math">(O(1))</Highlight>.
        </p>
        <p>
          Data insertion and deletion are only possible at the top{" "}
          <Highlight type="math">(O(1))</Highlight>.
        </p>
      </article>

      <PageNav />
    </main>
  );
}
