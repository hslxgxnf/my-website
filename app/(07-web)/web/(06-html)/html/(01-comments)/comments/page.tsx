import type { Metadata } from "next";

import { code, reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Comments",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="link-id" number={1} lastUpdated="2026-07-20">
            Comments
          </Heading>
        </RefButton>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <PageNav />
    </main>
  );
}
