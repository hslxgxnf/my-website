"use client";

import { useRef } from "react";

import styles from "@/styles/pages/detail/page.module.css";
import HeadingLink from "@/components/pages/detail/HeadingLink";
import PreCode from "@/components/pages/detail/PreCode";
import { reference, code } from "@/app/web/html/comments/data";
import ReferenceButton from "@/components/pages/detail/ReferenceButton";

export default function Main() {
  const asideRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside ref={asideRef}></aside>

      <article>
        <ReferenceButton reference={reference} asideRef={asideRef}>
          <HeadingLink headingNumber={1}>Comments</HeadingLink>
        </ReferenceButton>
        <PreCode code={code} language="haml" />
      </article>

      <aside></aside>
    </main>
  );
}
