import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/css/at-rules/_@layer/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

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
          The <code className="example">@layer</code> at-rule declares a cascade
          layer.
        </p>
        <p>
          The <code className="example">@layer</code> statement at-rule creates
          more than one named layer.
        </p>
        <p>
          The <code className="example">@layer</code> block at-rule creates a
          named or anonymous layer.
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
