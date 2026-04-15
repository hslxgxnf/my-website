import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import {
  reference,
  codeExternalCSSHTML,
  codeExternalCSSCSS,
  codeInternalCSS,
  codeInlineCSS,
} from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Connecting CSS to HTML",
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
            <HeadingLinkId headingNumber={1}>
              Connecting CSS to HTML
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>External CSS</HeadingLinkId>
          <p>
            Use the <Highlight type="simple-code">&lt;link&gt;</Highlight>{" "}
            element in the{" "}
            <Highlight type="simple-code">&lt;head&gt;</Highlight> element.
          </p>
          <p>This way is used a lot.</p>
          <Highlight type="complex-code">{codeExternalCSSHTML}</Highlight>
          <Highlight type="complex-code">{codeExternalCSSCSS}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Internal CSS</HeadingLinkId>
          <p>
            Use the <Highlight type="simple-code">&lt;style&gt;</Highlight>{" "}
            element in the{" "}
            <Highlight type="simple-code">&lt;head&gt;</Highlight> element.
          </p>
          <Highlight type="complex-code">{codeInternalCSS}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Inline CSS</HeadingLinkId>
          <p>
            Use the <Highlight type="simple-code">&lt;style&gt;</Highlight>{" "}
            attribute.
          </p>
          <Highlight type="complex-code">{codeInlineCSS}</Highlight>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
