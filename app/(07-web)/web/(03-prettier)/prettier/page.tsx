import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Prettier",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="link-id" number={1} lastUpdated="2026-04-15">
            Prettier
          </Heading>
        </RefButton>
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
            npm i -D prettier
          </Highlight>
        </p>
      </article>

      <PageNav />
    </main>
  );
}
