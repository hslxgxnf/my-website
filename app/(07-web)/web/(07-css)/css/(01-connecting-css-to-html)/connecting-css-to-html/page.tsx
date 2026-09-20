import type { Metadata } from "next";

import {
  reference,
  codeExternalCSSHTML,
  codeExternalCSSCSS,
  codeInternalCSS,
  codeInlineCSS,
} from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Connecting CSS to HTML",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-02-17">
              Connecting CSS to HTML
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            External CSS
          </Heading>
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
          <Heading type="link-id" number={2}>
            Internal CSS
          </Heading>
          <p>
            Use the <Highlight type="simple-code">&lt;style&gt;</Highlight>{" "}
            element in the{" "}
            <Highlight type="simple-code">&lt;head&gt;</Highlight> element.
          </p>
          <Highlight type="complex-code">{codeInternalCSS}</Highlight>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Inline CSS
          </Heading>
          <p>
            Use the <Highlight type="simple-code">&lt;style&gt;</Highlight>{" "}
            attribute.
          </p>
          <Highlight type="complex-code">{codeInlineCSS}</Highlight>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
