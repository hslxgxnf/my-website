import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import {
  reference,
  codeExternalCSSHTML,
  codeExternalCSSCSS,
  codeInternalCSS,
  codeInlineCSS,
  headings,
} from "@/app/web/css/connecting-css-to-html/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import PreCode from "@/components/detail-page/PreCode";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Connecting CSS to HTML",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference}></ReferenceNav>
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1}>
              Connecting CSS to HTML
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>External CSS</HeadingLinkId>
          <p>
            Use the <code className="example">&lt;link&gt;</code> element in the{" "}
            <code className="example">&lt;link&gt;</code> element.
          </p>
          <p>This way is used a lot.</p>
          <PreCode code={codeExternalCSSHTML} />
          <PreCode code={codeExternalCSSCSS} />
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Internal CSS</HeadingLinkId>
          <p>
            Use the <code className="example">&lt;style&gt;</code> element in
            the <code className="example">&lt;head&gt;</code> element.
          </p>
          <PreCode code={codeInternalCSS} />
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Inline CSS</HeadingLinkId>
          <p>
            Use the <code className="example">&lt;style&gt;</code> attribute.
          </p>
          <PreCode code={codeInlineCSS} />
        </section>
      </article>

      <aside>
        <PageNav headings={headings} />
      </aside>
    </main>
  );
}
