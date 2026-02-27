"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import PreCode from "@/components/detail-page/PreCode";
import { reference, code } from "@/app/web/html/comments/data";

export default function ClientMain() {
  const asideRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside ref={asideRef}></aside>

      <article>
        <ReferenceButton reference={reference} asideRef={asideRef}>
          <HeadingLinkId headingNumber={1}>Comments</HeadingLinkId>
        </ReferenceButton>
        <PreCode code={code} />
      </article>

      <aside></aside>
    </main>
  );
}
