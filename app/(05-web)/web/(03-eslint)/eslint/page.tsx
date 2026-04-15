import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

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
          <HeadingLinkId headingNumber={1}>ESLint</HeadingLinkId>
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
