import type { Metadata } from "next";

// import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
// import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
// import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main>
      <ReferenceNav />

      <article>
        <HeadingLinkId headingNumber={1} lastUpdated="YYYY-MM-DD">
          Title
        </HeadingLinkId>
      </article>

      <PageNav />
    </main>
  );
}
