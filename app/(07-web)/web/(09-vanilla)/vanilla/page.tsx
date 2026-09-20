import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Vanilla",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="none" number={1} lastUpdated="2026-09-20">
            Vanilla
          </Heading>
        </RefButton>
        <hr />
        <Heading type="link-page" number={3}>
          Properties & Methods
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
