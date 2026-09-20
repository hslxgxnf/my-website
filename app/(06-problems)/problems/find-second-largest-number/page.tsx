import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Find Second Largest Number",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-13">
              Find Second Largest Number
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Problem
          </Heading>
          <p>
            Given an array of positive numbers. Find the second largest number
            from the array. If the second largest number doesn't exist then
            return -1.
          </p>
          <section>
            <Heading type="link-id" number={3}>
              Examples
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [12, 35, 1, 10, 34, 1]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">34</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [10, 5, 10]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">5</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [10, 10, 10]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">-1</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      The largest is 10 and the second largest does not exist.
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
                  <Highlight type="simple-code">2 ≤ arr.size() ≤ 10⁵</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">1 ≤ arr[i] ≤ 10⁵</Highlight>
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
