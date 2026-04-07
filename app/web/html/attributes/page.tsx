import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import {
  reference,
  codeEnumeratedAttributes,
  codeBooleanAttributes,
  codeClass,
} from "./data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton/ReferenceButton";
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
          <p>
            Attributes are written as{" "}
            <Highlight type="text">name="value"</Highlight> inside an element's
            opening tag.
          </p>
          <p>
            Attributes provide additional information about an element's
            behavior, appearance, or metadata.
          </p>
          <p>
            Attribute names and enumerated attribute values are
            case-insensitive, but it is recommended to use lowercase.
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
