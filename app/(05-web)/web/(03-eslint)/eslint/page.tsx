import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "ESLint",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} publishedAt="2026-04-15">
            ESLint
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          <Highlight type="text">ESLint</Highlight> lints{" "}
          <Highlight type="text">JavaScript</Highlight>,{" "}
          <Highlight type="text">TypeScript</Highlight>, etc.
        </p>
        <p>
          The below config file can be used in{" "}
          <Highlight type="text">Next.js</Highlight> projects.
          <br />
          <Highlight type="simple-code" copy={true}>
            npm i -D eslint eslint-config-next @eslint/compat
          </Highlight>
        </p>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
