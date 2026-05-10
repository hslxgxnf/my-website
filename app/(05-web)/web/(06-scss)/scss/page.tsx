import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, commentsCode, variablesCode, forCode } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton/ReferenceButton";
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
            <HeadingLinkId headingNumber={1} publishedAt="2026-05-10">
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
            <Highlight type="text">Sass</Highlight> and{" "}
            <Highlight type="text">SCSS</Highlight> are{" "}
            <Highlight type="text">CSS</Highlight> preprocessors. While{" "}
            <Highlight type="text">SCSS</Highlight> was introduced after{" "}
            <Highlight type="text">Sass</Highlight>, it is now more widely
            recommended because its syntax is fully compatible with standard{" "}
            <Highlight type="text">CSS</Highlight>.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Files</HeadingLinkId>
          <p>
            An <Highlight type="text">SCSS</Highlight> file with a leading
            underscore is a partial, meaning it is not compiled to a standalone{" "}
            <Highlight type="text">CSS</Highlight> file.
          </p>
          <p>
            The <Highlight type="text">_index.scss</Highlight> file is a
            reserved file to gather partials.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Comments</HeadingLinkId>
          <Highlight type="complex-code">{commentsCode}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Variables</HeadingLinkId>
          <p>
            <Highlight type="text">SCSS</Highlight> variables are scoped to the
            file or block where they are defined. Therefore, a{" "}
            <Highlight type="text">SCSS</Highlight> variable in the{" "}
            <Highlight type="text">:root</Highlight> selector is treated as
            local and cannot be accessed by other selectors or files. To achieve
            global-like behavior, define the variable outside of any selector
            and import it in other files.
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
                acts as an intermediate bridge between an imported module and an
                importing file. It is primarily used in the{" "}
                <Highlight type="text">_index.scss</Highlight> file.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@use</Highlight>
              </p>
              <p>
                The <Highlight type="simple-code">@use</Highlight> at-rule loads
                a module only once, regardless of how many times it is
                referenced.
              </p>
              <p>
                By convention, a leading underscore and{" "}
                <Highlight type="text">.scss</Highlight> extension should be
                omitted from a path. Additionally, when importing the{" "}
                <Highlight type="text">_index.scss</Highlight> file, only its
                directory name should be referenced.
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
