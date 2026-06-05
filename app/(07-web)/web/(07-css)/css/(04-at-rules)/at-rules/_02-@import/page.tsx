import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} publishedAt="2026-02-24">
            @import
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          The <Highlight type="simple-code">@import</Highlight> at-rule imports
          styles from other stylesheets.
        </p>
        <p>
          The <Highlight type="simple-code">@import</Highlight> must be at the
          top except the <Highlight type="simple-code">@charset</Highlight> and{" "}
          <Highlight type="simple-code">@layer</Highlight> at-rules.
        </p>
        <p>
          The <Highlight type="simple-code">@import</Highlight> at-rule and the{" "}
          <Highlight type="simple-code">layer</Highlight> keyword creates an
          anonymous layer.
        </p>
        <p>
          The <Highlight type="simple-code">@import</Highlight> at-rule and the{" "}
          <Highlight type="simple-code">layer()</Highlight> function creates a
          named or anonymous layer.
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
