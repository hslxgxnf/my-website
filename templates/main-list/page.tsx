import type { Metadata } from "next";

// import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
// import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "???",
};

export default function Page() {
  return (
    <main>
      <RefNav /* reference={reference} */ />

      <article>
        <Heading type="none" number={1} lastUpdated="YYYY-MM-DD">
          Title
        </Heading>
        <hr />
        <Heading type="none" number={2}>
          Sub Title
        </Heading>
        <Heading type="link-page" number={3}>
          Link Page
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
