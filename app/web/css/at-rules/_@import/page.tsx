import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/css/at-rules/_@import/data";
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
          <HeadingLinkId headingNumber={1}>@import</HeadingLinkId>
        </ReferenceButton>
        <p>
          The <code className="example">@import</code> at-rule imports styles
          from other stylesheets.
        </p>
        <p>
          The <code className="example">@import</code> must be at the top except
          the <code className="example">@charset</code> and{" "}
          <code className="example">@layer</code> at-rules.
        </p>
        <p>
          The <code className="example">@import</code> at-rule and the{" "}
          <code className="example">layer</code> keyword creates an anonymous
          layer.
        </p>
        <p>
          The <code className="example">@import</code> at-rule and the{" "}
          <code className="example">layer()</code> function creates a named or
          anonymous layer.
        </p>
      </article>

      <aside></aside>
    </main>
  );
}
