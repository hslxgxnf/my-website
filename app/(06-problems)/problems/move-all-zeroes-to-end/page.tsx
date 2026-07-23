import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Move All Zeroes to End",
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
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-13">
              Move All Zeroes to End
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            Given an array. Move all the zeroes in the array to the right end
            while maintaining the relative order of the non-zero elements. The
            operation must be performed in place.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>Examples</HeadingLinkId>
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
