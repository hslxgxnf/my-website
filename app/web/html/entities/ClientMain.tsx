"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import { referenceFirst, referenceSecond } from "@/app/web/html/entities/data";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

export default function ClientMain() {
  const asideRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside ref={asideRef}></aside>

      <article>
        <ReferenceButton reference={referenceFirst} asideRef={asideRef}>
          <HeadingLinkId headingNumber={1}>Entities</HeadingLinkId>
        </ReferenceButton>
        <ul>
          <li>
            <code className="emphasis">Less-Than &lt;</code>&nbsp;
            <code className="example">&amp;lt;</code>
          </li>
          <li>
            <code className="emphasis">Greater-Than &gt;</code>&nbsp;
            <code className="example">&amp;gt;</code>
          </li>
          <li>
            <code className="emphasis">Copyright &copy;</code>&nbsp;
            <code className="example">&amp;copy;</code>
          </li>
          <li>
            <code className="emphasis">Trade Mark &trade;</code>&nbsp;
            <code className="example">&amp;trade;</code>
          </li>
          <ReferenceButton reference={referenceSecond} asideRef={asideRef}>
            <li>
              <code className="emphasis">Non-Breaking Space &nbsp;</code>&nbsp;
              <code className="example">&amp;nbsp;</code>
              <ul>
                <li>
                  The <code className="example">&amp;nbsp;</code> entity is a
                  space without creating a new line.
                </li>
                <li>
                  The <code className="example">&amp;nbsp;</code> entity can be
                  used to write two or more spaces in a row.
                </li>
              </ul>
            </li>
          </ReferenceButton>
          <li>
            <code className="emphasis">Ampersand &amp;</code>&nbsp;
            <code className="example">&amp;amp;</code>
          </li>
          <li>
            <code className="emphasis">Quotation Mark &quot;</code>&nbsp;
            <code className="example">&amp;quot;</code>
          </li>
          <li>
            <code className="emphasis">Apostrophe &apos;</code>&nbsp;
            <code className="example">&amp;apos;</code>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
