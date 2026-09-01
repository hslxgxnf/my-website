import type { Metadata } from "next";

import {
  reference,
  customPropertiesCode,
  nonCustomPropertiesCode,
} from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Property Arrangement",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-02-22">
              Property Arrangement
            </HeadingLinkId>
          </RefButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Custom Properties</HeadingLinkId>
          <Highlight type="complex-code">{customPropertiesCode}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Non-Custom Properties</HeadingLinkId>
          <Highlight type="complex-code">{nonCustomPropertiesCode}</Highlight>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
