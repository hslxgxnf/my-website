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
            @layer
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          The <Highlight type="simple-code">@layer</Highlight> at-rule declares
          a cascade layer.
        </p>
        <p>
          The <Highlight type="simple-code">@layer</Highlight> statement at-rule
          creates one or more named layers.
        </p>
        <p>
          The <Highlight type="simple-code">@layer</Highlight> block at-rule
          creates a named or anonymous layer.
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
