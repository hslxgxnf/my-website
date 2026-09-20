import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Rotate Array Counterclockwise",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-13">
              Rotate Array Counterclockwise
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Problem
          </Heading>
          <p>
            Given an array. Rotate the array counterclockwise by d steps, where
            d is a positive integer. Consider the array as circular. Do the
            mentioned change in the array in place.
          </p>
          <section>
            <Heading type="link-id" number={3}>
              Examples
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [1, 2, 3, 4, 5], 2
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[3, 4, 5, 1, 2]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">
                    [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
                  </Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [7, 3, 9, 1], 9
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[3, 9, 1, 7]</Highlight>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Constraints
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    1 ≤ arr.size(), d ≤ 10⁵
                  </Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">0 ≤ arr[i] ≤ 10⁵</Highlight>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Expected Complexities
            </Heading>
            <ul>
              <li>
                <p>
                  Time Complexity:{" "}
                  <Highlight type="math">{`\\mathcal{O}(n)`}</Highlight>
                </p>
              </li>
              <li>
                <p>
                  Auxiliary Space:{" "}
                  <Highlight type="math">{`\\mathcal{O}(1)`}</Highlight>
                </p>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Solution
          </Heading>
          <Highlight type="complex-code">{code}</Highlight>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
