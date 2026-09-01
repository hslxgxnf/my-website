import type { Metadata } from "next";

import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "List",
};

export default function Page() {
  return (
    <main>
      <ReferenceNav reference={reference} />

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-08-25">
            List
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          Data access is slow <Highlight type="math">(O(n))</Highlight>.
        </p>
        <p>
          Data insertion and deletion are fast{" "}
          <Highlight type="math">(O(1))</Highlight>.
        </p>
        <p>There are singly, doubly, and circular linked lists.</p>
      </article>

      <PageNav />
    </main>
  );
}
