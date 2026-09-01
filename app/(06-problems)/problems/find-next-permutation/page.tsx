import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Find Next Permutation",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-22">
              Find Next Permutation
            </HeadingLinkId>
          </RefButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            Given an array. Find the next permutation that rearranges the array
            into the next lexicographical order. If there is no next
            permutation, rearrange the array into the lowest possible order.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>Examples</HeadingLinkId>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [2, 4, 1, 7, 5, 0]
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[2, 4, 5, 0, 1, 7]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [3, 4, 2, 5, 1]
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[3, 4, 5, 1, 2]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [3, 2, 1]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">[1, 2, 3]</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      As{" "}
                      <Highlight type="simple-code" copy={true}>
                        [3, 2, 1]
                      </Highlight>{" "}
                      is the last permutation, the next permutation is the
                      lowest one.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Constraints</HeadingLinkId>
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
            <HeadingLinkId headingNumber={3}>
              Expected Complexities
            </HeadingLinkId>
            <ul>
              <li>
                <p>
                  Time Complexity: <Highlight type="math">O(n)</Highlight>
                </p>
              </li>
              <li>
                <p>
                  Auxiliary Space: <Highlight type="math">O(1)</Highlight>
                </p>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Solution</HeadingLinkId>
          <Highlight type="complex-code">{code}</Highlight>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
