import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Linked List",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-09-14">
            Linked List
          </HeadingLinkId>
        </RefButton>
        <p>
          Access is <Highlight type="math">{`\\mathcal{O}(n)`}</Highlight>.
        </p>
        <p>
          While insertion and deletion at known positions are{" "}
          <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>, those at
          arbitrary positions are{" "}
          <Highlight type="math">{`\\mathcal{O}(n)`}</Highlight> due to
          traversal.
        </p>
        <p>
          Types: Singly Linked List, Doubly Linked List, Circular Linked List
        </p>
      </article>

      <PageNav />
    </main>
  );
}
