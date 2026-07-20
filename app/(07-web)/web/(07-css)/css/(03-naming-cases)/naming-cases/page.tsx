import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Naming Cases",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <section>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-21">
            Naming Cases
          </HeadingLinkId>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>At-Rules</HeadingLinkId>
          <p>
            At-rules are case-insensitive, but using{" "}
            <Highlight type="text">kebab-case</Highlight> is recommended (e.g.,{" "}
            <Highlight type="simple-code">@import</Highlight>,{" "}
            <Highlight type="simple-code">@counter-style</Highlight>).
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Selectors</HeadingLinkId>
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
          <HeadingLinkId headingNumber={2}>Declarations</HeadingLinkId>
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
          <HeadingLinkId headingNumber={2}>Variables</HeadingLinkId>
          <p>
            Variable names are case-sensitive, and using{" "}
            <Highlight type="text">kebab-case</Highlight> for is recommended.
            They must start with <Highlight type="simple-code">--</Highlight>{" "}
            (e.g., <Highlight type="simple-code">--space-10</Highlight>,{" "}
            <Highlight type="simple-code">--color-base</Highlight>).
          </p>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
