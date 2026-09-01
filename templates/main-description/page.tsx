import type { Metadata } from "next";

// import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
// import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
// import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main>
      <RefNav /* reference={reference} */ />

      <article>
        <HeadingLinkId headingNumber={1} lastUpdated="YYYY-MM-DD">
          Title
        </HeadingLinkId>
      </article>

      <PageNav />
    </main>
  );
}
