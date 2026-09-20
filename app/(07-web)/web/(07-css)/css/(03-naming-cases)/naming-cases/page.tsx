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
            At-Rules
          </Heading>
          <p>
            At-rules are case-insensitive, but using{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended (e.g.,{" "}
            <Highlight type="simple-code">@import</Highlight>,{" "}
            <Highlight type="simple-code">@counter-style</Highlight>).
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Selectors
          </Heading>
          <p>
            Type selectors, enumerated attribute selectors, pseudo-classes, and
            pseudo-elements are case-insensitive, while ID selectors, class
            selectors, and non-enumerated attribute selectors are
            case-sensitive. Using <Highlight type="text">kebab-case</Highlight>{" "}
            is recommended (e.g.,{" "}
            <Highlight type="simple-code">.main-container</Highlight>).
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Declarations
          </Heading>
          <p>
            Properties and values are case-insensitive, but using{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended (e.g.,{" "}
            <Highlight type="simple-code">
              justify-content: space-between
            </Highlight>
            ).
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Variables
          </Heading>
          <p>
            Variable names are case-sensitive, and using{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended. They
            must start with <Highlight type="simple-code">--</Highlight> (e.g.,{" "}
            <Highlight type="simple-code">--space-10</Highlight>,{" "}
            <Highlight type="simple-code">--color-base</Highlight>).
          </p>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
