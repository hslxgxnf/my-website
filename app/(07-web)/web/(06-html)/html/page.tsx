import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "HTML",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          HTML (HyperText Markup Language)
        </Heading>
        <hr />
        <Heading type="link-page" number={3}>
          Comments
        </Heading>
        <Heading type="link-page" number={3}>
          Naming Cases
        </Heading>
        <Heading type="link-page" number={3}>
          Elements
        </Heading>
        <Heading type="link-page" number={3}>
          Attributes
        </Heading>
        <Heading type="link-page" number={3}>
          Entities
        </Heading>
        <Heading type="link-page" number={3}>
          Emmet
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
