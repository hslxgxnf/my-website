import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "IDE Settings",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          IDE Settings
        </Heading>
        <hr />
        <Heading type="link-page" number={3}>
          JetBrains WebStorm
        </Heading>
        <Heading type="link-page" number={3}>
          JetBrains PyCharm
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
