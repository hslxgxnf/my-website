import type { Metadata } from "next";

// import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
// import ReferenceButton from "@/components/main/ReferenceButton";
import Heading from "@/components/main/Heading/Heading";
// import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "TypeScript",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="link-id" number={1} lastUpdated="2026-07-14">
          TypeScript
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
