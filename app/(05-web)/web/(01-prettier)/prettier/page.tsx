import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight";
import PageNav from "@/components/main-description/PageNav";

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
