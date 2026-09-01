import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Array",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-08-25">
            Array
          </HeadingLinkId>
        </RefButton>
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

      <PageNav />
    </main>
  );
}
