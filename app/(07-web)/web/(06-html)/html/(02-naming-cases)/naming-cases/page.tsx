import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Naming Cases",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <section>
          <Heading type="link-id" number={1} lastUpdated="2026-07-21">
            Naming Cases
          </Heading>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Elements
          </Heading>
          <p>
            Element tags are case-insensitive, but using{" "}
            <Highlight type="text">lowercase</Highlight> is recommended.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Attribute Names
          </Heading>
          <p>
            Attribute names are case-insensitive, but using{" "}
            <Highlight type="text">lowercase</Highlight> or{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended (e.g.,{" "}
            <Highlight type="simple-code">tabindex</Highlight>,{" "}
            <Highlight type="simple-code">popover-target</Highlight>
            ).
          </p>
          <p>
            Custom attribute names are case-insensitive, but using{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended. They
            must start with <Highlight type="simple-code">data-</Highlight>{" "}
            (e.g., <Highlight type="simple-code">data-is-clicked</Highlight>).
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Attribute Values
          </Heading>
          <p>
            Enumerated attribute values are case-insensitive, but using{" "}
            <Highlight type="text">lowercase</Highlight> or{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended (e.g.,{" "}
            <Highlight type="simple-code">formaction</Highlight>,{" "}
            <Highlight type="simple-code">user-credentials</Highlight>
            ).
          </p>
          <p>
            Non-enumerated attribute values are case-sensitive, and using{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended (e.g.,{" "}
            <Highlight type="simple-code">id="target-container"</Highlight>).
          </p>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
