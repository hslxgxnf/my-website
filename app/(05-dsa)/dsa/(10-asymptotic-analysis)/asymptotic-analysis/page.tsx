import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Asymptotic Analysis",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-23">
              Asymptotic Analysis
            </Heading>
          </RefButton>
          <p>
            Asymptotic analysis evaluates the performance of an algorithm based
            on input size by measuring its time or space complexity.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Time Complexity
          </Heading>
          <p>
            Since actual execution time is machine-dependent, time complexity
            measures how many times each statement executes.
          </p>
          <p>
            Time complexity is commonly expressed using{" "}
            <Highlight type="text">Big-O</Highlight> notation.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Space Complexity
          </Heading>
          <p>
            Auxiliary space is the extra temporary space required by an
            algorithm.
          </p>
          <p>
            Space complexity is the total space required, including both input
            space and auxiliary space.
          </p>
          <p>
            Both auxiliary space and space complexity are commonly expressed
            using <Highlight type="text">Big-O</Highlight> notation.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Notations
          </Heading>
          <p>
            <Highlight type="text">Big-O</Highlight> notation measures the upper
            bound of an algorithm's complexity. It guarantees that the algorithm
            will not take more time or space than this limit.
          </p>
          <p>
            <Highlight type="text">Big-Ω</Highlight> notation measures the lower
            bound of an algorithm's complexity. It guarantees that the algorithm
            will require at least this much time or space.
          </p>
          <p>
            <Highlight type="text">Big-Θ</Highlight> notation measures the tight
            bound of an algorithm's complexity. It applies when the asymptotic
            upper and lower bounds match.
          </p>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
