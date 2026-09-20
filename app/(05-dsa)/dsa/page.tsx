import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "DSA",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="none" number={1} lastUpdated="2026-09-20">
            DSA (Data Structures and Algorithms)
          </Heading>
        </RefButton>
        <hr />
        <RefButton>
          <Heading type="none" number={2}>
            Linear Data Structures
          </Heading>
        </RefButton>
        <Heading type="link-page" number={3}>
          Array
        </Heading>
        <Heading type="link-page" number={3}>
          Linked List
        </Heading>
        <Heading type="link-page" number={3}>
          Stack
        </Heading>
        <Heading type="link-page" number={3}>
          Queue
        </Heading>
        <hr />
        <RefButton>
          <Heading type="none" number={2}>
            Non-Linear Data Structures
          </Heading>
        </RefButton>
        {/*<Heading type="none" number={3}>*/}
        {/*  Graph*/}
        {/*</Heading>*/}
        {/*<Heading type="none" number={3}>*/}
        {/*  Tree*/}
        {/*</Heading>*/}
        <hr />
        <Heading type="none" number={2}>
          Algorithms
        </Heading>
        <Heading type="link-page" number={3}>
          Asymptotic Analysis
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
