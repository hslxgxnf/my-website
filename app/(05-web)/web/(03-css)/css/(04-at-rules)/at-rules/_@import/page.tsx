import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>@import</HeadingLinkId>
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
