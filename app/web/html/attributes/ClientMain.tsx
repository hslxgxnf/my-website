"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import PreCode from "@/components/detail-page/PreCode";
import {
  referenceAttributes,
  referenceBooleanAttributes,
  referenceEnumeratedAttributes,
  codeBooleanAttributes,
  codeEnumeratedAttributes,
  codeClass,
  referenceAria,
  referenceRole,
  referenceRel,
} from "@/app/web/html/attributes/data";
import SideNav from "@/components/detail-page/SideNav";

export default function ClientMain() {
  const asideRef = useRef<HTMLElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside ref={asideRef}></aside>

      <article ref={articleRef}>
        <section>
          <ReferenceButton reference={referenceAttributes} asideRef={asideRef}>
            <HeadingLinkId headingNumber={1}>Attributes</HeadingLinkId>
          </ReferenceButton>
          <p>
            Attributes are written as{" "}
            <code className="emphasis">name=&quot;value&quot;</code> inside an
            element&apos;s opening tag.
          </p>
          <p>
            Attributes provide additional information about an element&apos;s
            behavior, appearance, or metadata.
          </p>
          <p>
            Attribute names and enumerated attribute values are
            case-insensitive, but it is recommended to use lowercase.
            Non-enumerated attribute values are case-sensitive.
          </p>
        </section>
        <section>
          <ReferenceButton
            reference={referenceEnumeratedAttributes}
            asideRef={asideRef}
          >
            <HeadingLinkId headingNumber={2}>
              Enumerated Attributes
            </HeadingLinkId>
          </ReferenceButton>
          <p>An enumerated attribute accepts a predefined set of values.</p>
          <PreCode code={codeEnumeratedAttributes} />
        </section>
        <section>
          <ReferenceButton
            reference={referenceBooleanAttributes}
            asideRef={asideRef}
          >
            <HeadingLinkId headingNumber={2}>Boolean Attributes</HeadingLinkId>
          </ReferenceButton>
          <p>
            A boolean attribute is determined solely by its presence or absence.
            When the attribute is present, it is considered{" "}
            <code className="example">true</code>; when it is absent, it is
            considered <code className="example">false</code>. The actual value
            assigned does not matter.
          </p>
          <PreCode code={codeBooleanAttributes} />
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Examples</HeadingLinkId>
          <ul>
            <li>
              <code className="example">id</code>
              <br />
              Elements cannot share the same <code className="example">
                id
              </code>{" "}
              value.
            </li>
            <li>
              <code className="example">class</code>
              <br />
              Elements can share the same <code className="example">
                class
              </code>{" "}
              value.
              <br />
              An element can have multiple{" "}
              <code className="example">class</code> values.
              <PreCode code={codeClass} />
            </li>
            <li>
              <code className="example">title</code>
              <br />
              For a mouse hovering tooltip.
            </li>
            <li>
              <code className="example">rel</code>
              <ul>
                <ReferenceButton reference={referenceRel} asideRef={asideRef}>
                  <li>
                    <code className="example">rel=&quot;noopener&quot;</code>
                  </li>
                  <li>
                    <code className="example">rel=&quot;noreferrer&quot;</code>
                    <br />
                    Contains{" "}
                    <code className="example">rel=&quot;noopener&quot;</code>.
                  </li>
                </ReferenceButton>
              </ul>
            </li>
            <ReferenceButton reference={referenceAria} asideRef={asideRef}>
              <li>
                <code className="example">aria-*</code>
                <ul>
                  <li>
                    <code className="example">aria-hidden</code>
                  </li>
                  <li>
                    <code className="example">aria-pressed</code>
                  </li>
                  <li>
                    <code className="example">aria-sort</code>
                  </li>
                </ul>
              </li>
            </ReferenceButton>
            <ReferenceButton reference={referenceRole} asideRef={asideRef}>
              <li>
                <code className="example">role</code>
              </li>
            </ReferenceButton>
          </ul>
        </section>
      </article>

      <aside>
        <SideNav articleRef={articleRef} />
      </aside>
    </main>
  );
}
