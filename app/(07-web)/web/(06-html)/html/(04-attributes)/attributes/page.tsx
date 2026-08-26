import type { Metadata } from "next";

import {
  reference,
  codeEnumeratedAttributes,
  codeCustomAttributesHTML,
  codeCustomAttributesJS,
  codeBooleanAttributes,
  codeClass,
} from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Attributes",
};

export default function Page() {
  return (
    <main>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-20">
              Attributes
            </HeadingLinkId>
          </ReferenceButton>
          <p>An attribute provides additional information to its element.</p>
          <p>
            An attribute is written as{" "}
            <Highlight type="simple-code">name="value"</Highlight> inside the
            opening tag of an element.
          </p>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>
              Enumerated Attributes
            </HeadingLinkId>
          </ReferenceButton>
          <p>An enumerated attribute accepts a predefined set of values.</p>
          <Highlight type="complex-code">{codeEnumeratedAttributes}</Highlight>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Custom Attributes</HeadingLinkId>
          </ReferenceButton>
          <p>
            <Highlight type="text">HTML</Highlight>{" "}
            <Highlight type="simple-code">data-*</Highlight>
            {" ⇄ "}
            <Highlight type="text">JavaScript</Highlight>{" "}
            <Highlight type="simple-code">HTMLElement.dataset</Highlight>
          </p>
          <Highlight type="complex-code">{codeCustomAttributesHTML}</Highlight>
          <Highlight type="complex-code">{codeCustomAttributesJS}</Highlight>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Boolean Attributes</HeadingLinkId>
          </ReferenceButton>
          <p>
            A boolean attribute is determined solely by its presence or absence.
            When the attribute is present, it is considered{" "}
            <Highlight type="simple-code">true</Highlight>; when it is absent,
            it is considered <Highlight type="simple-code">false</Highlight>.
            The actual value assigned does not matter.
          </p>
          <Highlight type="complex-code">{codeBooleanAttributes}</Highlight>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>
              Attribute Reflection
            </HeadingLinkId>
          </ReferenceButton>
          <p>
            <Highlight type="text">HTML</Highlight> Attributes are reflected in
            corresponding <Highlight type="text">JavaScript</Highlight>{" "}
            properties.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Examples</HeadingLinkId>
          <ul>
            <li>
              <p>
                <Highlight type="simple-code">id</Highlight>
              </p>
              <p>
                Elements cannot share the same{" "}
                <Highlight type="simple-code">id</Highlight> value.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">class</Highlight>
              </p>
              <p>
                Elements can share the same{" "}
                <Highlight type="simple-code">class</Highlight> value and have
                multiple <Highlight type="simple-code">class</Highlight> values.
              </p>
              <Highlight type="complex-code">{codeClass}</Highlight>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">title</Highlight>
              </p>
              <p>Displays a tooltip on mouse hover.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">rel</Highlight>
              </p>
              <ul>
                <ReferenceButton>
                  <li>
                    <p>
                      <Highlight type="simple-code">rel="noopener"</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">rel="noreferrer"</Highlight>
                    </p>
                    <p>
                      Contains{" "}
                      <Highlight type="simple-code">rel="noopener"</Highlight>.
                    </p>
                  </li>
                </ReferenceButton>
              </ul>
            </li>
            <ReferenceButton>
              <li>
                <p>
                  <Highlight type="simple-code">aria-*</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">aria-hidden</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">aria-pressed</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">aria-sort</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
            </ReferenceButton>
            <ReferenceButton>
              <li>
                <p>
                  <Highlight type="simple-code">role</Highlight>
                </p>
              </li>
            </ReferenceButton>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
