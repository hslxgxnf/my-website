import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "At-Rules",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-23">
              At-Rules
            </HeadingLinkId>
          </ReferenceButton>
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
            <ReferenceButton>
              <HeadingLinkId headingNumber={3}>@import</HeadingLinkId>
            </ReferenceButton>
            <p>
              The <Highlight type="simple-code">@import</Highlight> at-rule
              imports styles from other stylesheets.
            </p>
            <p>
              The <Highlight type="simple-code">@import</Highlight> must be at
              the top except the{" "}
              <Highlight type="simple-code">@charset</Highlight> and{" "}
              <Highlight type="simple-code">@layer</Highlight> at-rules.
            </p>
            <p>
              The <Highlight type="simple-code">@import</Highlight> at-rule and
              the <Highlight type="simple-code">layer</Highlight> keyword
              creates an anonymous layer.
            </p>
            <p>
              The <Highlight type="simple-code">@import</Highlight> at-rule and
              the <Highlight type="simple-code">layer()</Highlight> function
              creates a named or anonymous layer.
            </p>
          </section>
          <section>
            <ReferenceButton>
              <HeadingLinkId headingNumber={3}>@layer</HeadingLinkId>
            </ReferenceButton>
            <p>
              The <Highlight type="simple-code">@layer</Highlight> at-rule
              declares a cascade layer.
            </p>
            <p>
              The <Highlight type="simple-code">@layer</Highlight> statement
              at-rule creates one or more named layers.
            </p>
            <p>
              The <Highlight type="simple-code">@layer</Highlight> block at-rule
              creates a named or anonymous layer.
            </p>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Block At-Rules</HeadingLinkId>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
