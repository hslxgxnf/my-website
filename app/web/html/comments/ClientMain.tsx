"use client";

import { useRef } from "react";

import styles from "@/styles/detail-page/page.module.css";
import { reference, code } from "@/app/web/html/comments/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import PreCode from "@/components/detail-page/PreCode";

export default function ClientMain() {
  const asideRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside ref={asideRef}>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton asideRef={asideRef}>
          <HeadingLinkId headingNumber={1}>Comments</HeadingLinkId>
        </ReferenceButton>
        <PreCode code={code} />
      </article>

      <aside></aside>
    </main>
  );
}
