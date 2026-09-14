import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Queue",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-09-14">
              Queue
            </HeadingLinkId>
          </RefButton>
          <p>FIFO (First In, First Out)</p>
          <p>
            Access at the front and back is{" "}
            <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>.
          </p>
          <p>
            Insertion at the back is{" "}
            <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>, and deletion
            at the front is{" "}
            <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>.
          </p>
          <p>Types: Simple Queue, Double-Ended Queue (Deque), Priority Queue</p>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>
              Double-Ended Queue (Deque)
            </HeadingLinkId>
          </RefButton>
          <p>
            Insertion and deletion at both ends are{" "}
            <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>.
          </p>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>Priority Queue</HeadingLinkId>
          </RefButton>
          <p>Arranges elements based on priority, not insertion order.</p>
          <p>Typically implemented with a binary heap.</p>
          <p>
            Access to the highest-priority element is{" "}
            <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>.
          </p>
          <p>
            Insertion is{" "}
            <Highlight type="math">{`\\mathcal{O}(\\log n)`}</Highlight> due to
            priority rearrangement.
          </p>
          <p>
            Deletion of the highest-priority element is{" "}
            <Highlight type="math">{`\\mathcal{O}(\\log n)`}</Highlight> due to
            priority rearrangement.
          </p>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
