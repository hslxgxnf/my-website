import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "ESLint",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="link-id" number={1} lastUpdated="2026-07-20">
            ESLint
          </Heading>
        </RefButton>
        <p>
          <Highlight type="text">ESLint</Highlight> lints{" "}
          <Highlight type="text">JavaScript</Highlight>,{" "}
          <Highlight type="text">TypeScript</Highlight>, etc.
        </p>
        <p>
          The below config file can be used in{" "}
          <Highlight type="text">Next.js</Highlight> projects.
        </p>
        <p>
          <Highlight type="simple-code" copy={true}>
            npm i -D eslint eslint-config-next @eslint/compat
          </Highlight>
        </p>
        <Highlight type="complex-code">{code}</Highlight>
      </article>

      <PageNav />
    </main>
  );
}
