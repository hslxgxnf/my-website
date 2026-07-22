import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Find Next Permutation",
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
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-22">
              Find Next Permutation
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            Given an array. Find the max sum of a subarray containing at least
            one element.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>Examples</HeadingLinkId>
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

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
