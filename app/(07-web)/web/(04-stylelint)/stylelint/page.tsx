import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Stylelint",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-04-15">
            Stylelint
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          <Highlight type="text">Stylelint</Highlight> lints{" "}
          <Highlight type="text">CSS</Highlight>,{" "}
          <Highlight type="text">SCSS</Highlight>, etc.
        </p>
        <p>
          The default IDE arrangement feature fails to arrange properties within
          nested at-rules and <Highlight type="text">SCSS</Highlight> at-rules.
          The <Highlight type="simple-code">"order/properties-order"</Highlight>{" "}
          rule ensures consistent arrangement except for custom properties.
          <br />
          <Highlight type="simple-code" copy={true}>
            npm i -D stylelint postcss-scss stylelint-scss stylelint-order
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
