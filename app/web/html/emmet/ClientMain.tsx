"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/html/emmet/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

export default function ClientMain() {
  const asideRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside ref={asideRef}>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton asideRef={asideRef}>
          <HeadingLinkId headingNumber={1}>Emmet</HeadingLinkId>
        </ReferenceButton>
        <ul>
          <li>
            <code className="example">div.container&#x7b;content&#x7d;</code>
          </li>
          <li>
            <code className="example">p&gt;lorem100</code>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
