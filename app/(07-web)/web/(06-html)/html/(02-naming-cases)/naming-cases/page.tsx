import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Naming Cases",
};

export default function Page() {
  return (
    <main>
      <aside>
        <RefNav />
      </aside>

      <article>
        <section>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-21">
            Naming Cases
          </HeadingLinkId>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Elements</HeadingLinkId>
          <p>
            Element tags are case-insensitive, but using{" "}
            <Highlight type="text">lowercase</Highlight> is recommended.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Attribute Names</HeadingLinkId>
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
          <HeadingLinkId headingNumber={2}>Attribute Values</HeadingLinkId>
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
