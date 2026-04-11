import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import {
  reference,
  codeEnumeratedAttributes,
  codeCustomAttributesHTML,
  codeCustomAttributesJS,
  codeBooleanAttributes,
  codeClass,
} from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Attributes",
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
            <HeadingLinkId headingNumber={1}>Attributes</HeadingLinkId>
          </ReferenceButton>
          <p>An attribute provides additional information to its element.</p>
          <p>
            An attribute is written as{" "}
            <Highlight type="text">name="value"</Highlight> inside the opening
            tag of an element.
          </p>
          <p>
            Attribute names and enumerated attribute values are
            case-insensitive, but it is recommended to use lowercase.
            <br />
            Non-enumerated attribute values are case-sensitive.
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
              <Highlight type="simple-code">id</Highlight>
              <br />
              Elements cannot share the same{" "}
              <Highlight type="simple-code">id</Highlight> value.
            </li>
            <li>
              <Highlight type="simple-code">class</Highlight>
              <br />
              Elements can share the same{" "}
              <Highlight type="simple-code">class</Highlight> value.
              <br />
              An element can have multiple{" "}
              <Highlight type="simple-code">class</Highlight> values.
              <Highlight type="complex-code">{codeClass}</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">title</Highlight>
              <br />
              For a mouse hovering tooltip.
            </li>
            <li>
              <Highlight type="simple-code">rel</Highlight>
              <ul>
                <ReferenceButton>
                  <li>
                    <Highlight type="simple-code">rel="noopener"</Highlight>
                  </li>
                  <li>
                    <Highlight type="simple-code">rel="noreferrer"</Highlight>
                    <br />
                    Contains{" "}
                    <Highlight type="simple-code">rel="noopener"</Highlight>.
                  </li>
                </ReferenceButton>
              </ul>
            </li>
            <ReferenceButton>
              <li>
                <Highlight type="simple-code">aria-*</Highlight>
                <ul>
                  <li>
                    <Highlight type="simple-code">aria-hidden</Highlight>
                  </li>
                  <li>
                    <Highlight type="simple-code">aria-pressed</Highlight>
                  </li>
                  <li>
                    <Highlight type="simple-code">aria-sort</Highlight>
                  </li>
                </ul>
              </li>
            </ReferenceButton>
            <ReferenceButton>
              <li>
                <Highlight type="simple-code">role</Highlight>
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
