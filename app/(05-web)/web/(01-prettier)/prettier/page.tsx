import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import PageNav from "@/components/non-root/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Prettier",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Prettier</HeadingLinkId>
        </ReferenceButton>

        <p>
          <Highlight type="text">Prettier</Highlight> formats{" "}
          <Highlight type="text">HTML</Highlight>,{" "}
          <Highlight type="text">CSS</Highlight>,{" "}
          <Highlight type="text">JavaScript</Highlight>,{" "}
          <Highlight type="text">JSON</Highlight>,{" "}
          <Highlight type="text">Markdown</Highlight>, etc.
        </p>
        <p>
          <Highlight type="simple-code" copy={true}>
            npm install --save-dev --save-exact prettier
          </Highlight>
        </p>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
