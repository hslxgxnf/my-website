import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "List",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-08-25">
            List
          </HeadingLinkId>
        </RefButton>
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
