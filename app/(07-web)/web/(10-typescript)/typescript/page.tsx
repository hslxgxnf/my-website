import type { Metadata } from "next";

// import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
// import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
// import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "TypeScript",
};

export default function Page() {
  return (
    <main>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <HeadingLinkId headingNumber={1} lastUpdated="2026-07-14">
          TypeScript
        </HeadingLinkId>
      </article>

      <PageNav />
    </main>
  );
}
