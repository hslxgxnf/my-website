import type { Metadata } from "next";

// import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
// import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
// import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main>
      <RefNav /* reference={reference} */ />

      <article>
        <Heading type="link-id" number={1} lastUpdated="YYYY-MM-DD">
          Title
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
