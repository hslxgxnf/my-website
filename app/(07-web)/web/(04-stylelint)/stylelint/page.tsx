import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Stylelint",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="link-id" number={1} lastUpdated="2026-07-20">
            Stylelint
          </Heading>
        </RefButton>
        <p>
          <Highlight type="text">Stylelint</Highlight> lints{" "}
          <Highlight type="text">CSS</Highlight>,{" "}
          <Highlight type="text">SCSS</Highlight>, etc.
        </p>
        <p>
          If the default IDE arrangement feature fails to arrange properties
          within nested at-rules and <Highlight type="text">SCSS</Highlight>{" "}
          at-rules, the{" "}
          <Highlight type="simple-code">"order/properties-order"</Highlight>{" "}
          rule ensures consistent arrangement except for custom properties.
        </p>
        <p>
          <Highlight type="simple-code" copy={true}>
            npm i -D stylelint postcss-scss stylelint-scss stylelint-order
          </Highlight>
        </p>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <PageNav />
    </main>
  );
}
