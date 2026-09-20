import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Find Max Sum of Subarray",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-13">
              Find Max Sum of Subarray
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Problem
          </Heading>
          <p>
            Given an array. Find the max sum of a subarray containing at least
            one element.
          </p>
          <section>
            <Heading type="link-id" number={3}>
              Examples
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [2, 3, -8, 7, -1, 2, 3]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">11</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      The subarray{" "}
                      <Highlight type="simple-code">[7, -1, 2, 3]</Highlight>{" "}
                      has the largest sum.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [-2, -4]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">-2</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      The subarray{" "}
                      <Highlight type="simple-code">[-2]</Highlight> has the
                      largest sum.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [5, 4, 1, 7, 8]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">25</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      The subarray{" "}
                      <Highlight type="simple-code">[5, 4, 1, 7, 8]</Highlight>{" "}
                      has the largest sum.
                    </p>
                  </li>
                </ul>
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
                  <Highlight type="math">{`1 \\le \\text{Array Size} \\le 10^5`}</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="math">{`-10^4 \\le \\text{Array Element} \\le 10^4`}</Highlight>
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
