import styles from "@/styles/detail-page/page.module.css";
import { reference } from "./data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>@layer</HeadingLinkId>
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
