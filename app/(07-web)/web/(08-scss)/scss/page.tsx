import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, commentsCode, variablesCode, forCode } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "SCSS",
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
            <HeadingLinkId
              headingNumber={1}
              publishedAt="2026-05-10"
              updatedAt="2026-06-13"
            >
              SCSS
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Sass vs. SCSS</HeadingLinkId>
          <p>
            Syntactically awesome style sheets vs. Sassy Cascading Style Sheets
          </p>
          <p>
            Both <Highlight type="text">Sass</Highlight> and{" "}
            <Highlight type="text">SCSS</Highlight> are{" "}
            <Highlight type="text">CSS</Highlight> preprocessors. Although{" "}
            <Highlight type="text">SCSS</Highlight> was introduced after{" "}
            <Highlight type="text">Sass</Highlight>, it is now more widely
            recommended due to its full compatibility with standard{" "}
            <Highlight type="text">CSS</Highlight>.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Files</HeadingLinkId>
          <p>
            An <Highlight type="text">SCSS</Highlight> file with a leading
            underscore is a partial, meaning it does not compile into a
            standalone <Highlight type="text">CSS</Highlight> file.
          </p>
          <p>
            <Highlight type="text">_index.scss</Highlight> is reserved for
            gathering partials.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Comments</HeadingLinkId>
          <Highlight type="complex-code">{commentsCode}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Variables</HeadingLinkId>
          <p>
            <Highlight type="text">SCSS</Highlight> variables are scoped to
            their defining file or block. Declaring an{" "}
            <Highlight type="text">SCSS</Highlight> variable inside a selector,
            such as <Highlight type="text">:root</Highlight>, makes it local to
            that block and inaccessible from the outside. To make an{" "}
            <Highlight type="text">SCSS</Highlight> variable global, define it
            outside of all selectors and import it where needed.
          </p>
          <Highlight type="complex-code">{variablesCode}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Interpolation</HeadingLinkId>
          <p>
            <Highlight type="simple-code">#&#123;&#125;</Highlight>
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>At-Rules</HeadingLinkId>
          <ul>
            <li>
              <Highlight type="simple-code">@at-root</Highlight>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@mixin</Highlight>
              </p>
              <p>
                The <Highlight type="simple-code">@mixin</Highlight> at-rule
                creates a reusable set of styles.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@forward</Highlight>
              </p>
              <p>
                The <Highlight type="simple-code">@forward</Highlight> at-rule
                acts as a bridge between modules. It is primarily used in{" "}
                <Highlight type="text">_index.scss</Highlight>.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@use</Highlight>
              </p>
              <p>
                The <Highlight type="simple-code">@use</Highlight> at-rule loads
                a module only once, no matter how often it is imported.
              </p>
              <p>
                By convention, omit leading underscores and{" "}
                <Highlight type="text">.scss</Highlight> from paths. For{" "}
                <Highlight type="text">_index.scss</Highlight>, simply use its
                directory instead.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@include</Highlight>
              </p>
              <p>
                The <Highlight type="simple-code">@include</Highlight> at-rule
                applies a mixin to a selector.
              </p>
            </li>
            <li>
              <Highlight type="simple-code">@if</Highlight>,{" "}
              <Highlight type="simple-code">@else</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">@each</Highlight>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@for</Highlight>
              </p>
              <Highlight type="complex-code">{forCode}</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">@while</Highlight>
            </li>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
