import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Asymptotic Analysis",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-23">
              Asymptotic Analysis
            </HeadingLinkId>
          </ReferenceButton>
          <p>
            Asymptotic analysis evaluates the performance of an algorithm based
            on input size by measuring its time or space complexity.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Time Complexity</HeadingLinkId>
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
          <HeadingLinkId headingNumber={2}>Space Complexity</HeadingLinkId>
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
          <HeadingLinkId headingNumber={2}>Notations</HeadingLinkId>
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

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
