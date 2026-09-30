import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import SRHelper from "@/components/main-description/SRHelper";
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
            Given an array, rotate it counterclockwise by{" "}
            <Highlight type="math">d</Highlight> steps, where{" "}
            <Highlight type="math">d</Highlight> is a positive integer. Array
            indices wrap around. Modify the array in place.
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
                  <SRHelper type="output" />{" "}
                  <Highlight type="simple-code">[3, 4, 5, 1, 2]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3
                  </Highlight>{" "}
                  <SRHelper type="output" />{" "}
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
                  <SRHelper type="output" />{" "}
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
                  <Highlight type="math">{`1 \\le n \\le 10^5 \\ (\\text{where } n \\text{ is the length of the array})`}</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="math">{`1 \\le d \\le 10^5`}</Highlight>
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
