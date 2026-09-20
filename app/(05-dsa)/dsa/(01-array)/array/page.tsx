import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Array",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="link-id" number={1} lastUpdated="2026-09-14">
            Array
          </Heading>
        </RefButton>
        <p>
          Access by index is{" "}
          <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>.
        </p>
        <p>
          While insertion and deletion at the end are{" "}
          <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>, those at
          arbitrary positions are{" "}
          <Highlight type="math">{`\\mathcal{O}(n)`}</Highlight> due to element
          shifting.
        </p>
        <p>Types by Size: Fixed-Size Array, Dynamic-Size Array</p>
        <p>
          Types by Dimension: One-Dimensional Array, Multi-Dimensional Array
        </p>
      </article>

      <PageNav />
    </main>
  );
}
