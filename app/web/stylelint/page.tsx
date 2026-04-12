import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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
          <HeadingLinkId headingNumber={1}>Stylelint</HeadingLinkId>
        </ReferenceButton>
        <p>
          To lint <Highlight type="text">SCSS</Highlight> files and arrange
          properties, install packages.
          <br />
          <Highlight type="simple-code" copy={true}>
            npm i -D stylelint postcss-scss stylelint-scss stylelint-order
          </Highlight>
        </p>
        <p>The config file should be at the root.</p>
        <p>
          The default IDE arrangement feature fails to arrange properties within
          nested at-rules and <Highlight type="text">SCSS</Highlight> at-rules.
          In contrast, the{" "}
          <Highlight type="simple-code">"order/properties-order"</Highlight>{" "}
          rule ensures consistent arrangement except for custom properties.
        </p>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
