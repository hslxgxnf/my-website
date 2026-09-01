import type { Metadata } from "next";

import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Array",
};

export default function Page() {
  return (
    <main>
      <ReferenceNav reference={reference} />

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-08-25">
            Array
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          Index-based data access is fast{" "}
          <Highlight type="math">(O(1))</Highlight>.
        </p>
        <p>
          Data insertion and deletion are slow{" "}
          <Highlight type="math">(O(n))</Highlight>, except at the end{" "}
          <Highlight type="math">(O(1))</Highlight>.
        </p>
        <p>There are fixed-size and dynamic-size arrays.</p>
        <p>There are one-dimensional and multi-dimensional arrays.</p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
