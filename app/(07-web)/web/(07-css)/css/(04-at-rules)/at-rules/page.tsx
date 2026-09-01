import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "At-Rules",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-24">
              At-Rules
            </HeadingLinkId>
          </RefButton>
          <p>
            At-rules control how <Highlight type="text">CSS</Highlight> behaves.
          </p>
          <p>
            Statement at-rules end with a semicolon, while block at-rules end
            with curly braces.
          </p>
          <p>Some at-rules use at-rule functions and descriptors. </p>
          <p>
            Certain at-rules, such as{" "}
            <Highlight type="simple-code">@container</Highlight>,{" "}
            <Highlight type="simple-code">@layer</Highlight>,{" "}
            <Highlight type="simple-code">@media</Highlight>,{" "}
            <Highlight type="simple-code">@scope</Highlight>,{" "}
            <Highlight type="simple-code">@starting-style</Highlight>, and{" "}
            <Highlight type="simple-code">@supports</Highlight>, can be nested.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Statement At-Rules</HeadingLinkId>
          <section>
            <RefButton>
              <HeadingLinkId headingNumber={3}>@import</HeadingLinkId>
            </RefButton>
            <p>
              <Highlight type="simple-code">@import</Highlight> imports styles
              from other stylesheets.
            </p>
            <p>
              <Highlight type="simple-code">@import</Highlight> must be at the
              top except <Highlight type="simple-code">@charset</Highlight> and{" "}
              <Highlight type="simple-code">@layer</Highlight>.
            </p>
            <p>
              The <Highlight type="simple-code">@import</Highlight> at-rule with
              the <Highlight type="simple-code">layer</Highlight> keyword
              creates an anonymous layer.
            </p>
            <p>
              The <Highlight type="simple-code">@import</Highlight> at-rule with
              the <Highlight type="simple-code">layer()</Highlight> function
              creates a named or anonymous layer.
            </p>
          </section>
          <section>
            <RefButton>
              <HeadingLinkId headingNumber={3}>@layer</HeadingLinkId>
            </RefButton>
            <p>
              <Highlight type="simple-code">@layer</Highlight> declares a
              cascade layer.
            </p>
            <p>
              <Highlight type="simple-code">@layer</Highlight> creates one or
              more named layers as a statement at-rule.
            </p>
            <p>
              <Highlight type="simple-code">@layer</Highlight> creates a named
              or anonymous layer as a block at-rule.
            </p>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Block At-Rules</HeadingLinkId>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
