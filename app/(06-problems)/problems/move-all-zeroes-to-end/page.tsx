import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Move All Zeroes to End",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-13">
              Move All Zeroes to End
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Problem
          </Heading>
          <p>
            Given an array. Move all the zeroes in the array to the right end
            while maintaining the relative order of the non-zero elements. The
            operation must be performed in place.
          </p>
          <section>
            <Heading type="link-id" number={3}>
              Examples
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [1, 2, 0, 4, 3, 0, 5, 0]
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">
                    [1, 2, 4, 3, 5, 0, 0, 0]
                  </Highlight>
                </p>
                <ul>
                  <li>
                    <p>There are three 0s that are moved to the end.</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [0, 0, 0, 3, 1, 4]
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[3, 1, 4, 0, 0, 0]</Highlight>
                </p>
                <ul>
                  <li>
                    <p>There are three 0s that are moved to the end.</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [10, 20, 30]
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[10, 20, 30]</Highlight>
                </p>
                <ul>
                  <li>
                    <p>No change in array as there are no 0s.</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [0, 0]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">[0, 0]</Highlight>
                </p>
                <ul>
                  <li>
                    <p>No change in array as there are all 0s.</p>
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
                  <Highlight type="simple-code">1 ≤ arr.size() ≤ 10⁵</Highlight>
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
