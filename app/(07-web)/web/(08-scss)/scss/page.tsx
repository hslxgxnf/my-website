import type { Metadata } from "next";

import { reference, commentsCode, variablesCode, forCode } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "SCSS",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-20">
              SCSS (Sassy CSS)
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Sass vs. SCSS
          </Heading>
          <p>Syntactically awesome style sheets vs. Sassy CSS</p>
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
          <Heading type="link-id" number={2}>
            Files
          </Heading>
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
          <Heading type="link-id" number={2}>
            Comments
          </Heading>
          <Highlight type="complex-code">{commentsCode}</Highlight>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Variables
          </Heading>
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
          <Heading type="link-id" number={2}>
            Interpolation
          </Heading>
          <p>
            <Highlight type="simple-code">#&#123;&#125;</Highlight>
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            At-Rules
          </Heading>
          <ul>
            <li>
              <p>
                <Highlight type="simple-code">@at-root</Highlight>
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@mixin</Highlight>
              </p>
              <p>Creates a reusable set of styles.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@forward</Highlight>
              </p>
              <p>
                Acts as a bridge between modules. It is primarily used in{" "}
                <Highlight type="text">_index.scss</Highlight>.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@use</Highlight>
              </p>
              <p>
                Loads a module only once, no matter how often it is imported.
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
              <p>Applies a mixin to a selector.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@if</Highlight>,{" "}
                <Highlight type="simple-code">@else</Highlight>
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@each</Highlight>
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@for</Highlight>
              </p>
              <Highlight type="complex-code">{forCode}</Highlight>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">@while</Highlight>
              </p>
            </li>
          </ul>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
