import type { Metadata } from "next";

import {
  reference,
  customPropertiesCode,
  nonCustomPropertiesCode,
} from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

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
            <Heading type="link-id" number={1} lastUpdated="2026-02-22">
              Property Arrangement
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Custom Properties
          </Heading>
          <Highlight type="complex-code">{customPropertiesCode}</Highlight>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Non-Custom Properties
          </Heading>
          <Highlight type="complex-code">{nonCustomPropertiesCode}</Highlight>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
