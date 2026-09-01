import type { Metadata } from "next";

import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Rotate Array Clockwise",
};

export default function Page() {
  return (
    <main>
      <ReferenceNav reference={reference} />

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-13">
              Rotate Array Clockwise
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            Given an array. Rotate the array clockwise by d steps, where d is a
            positive integer. Consider the array as circular. Do the mentioned
            change in the array in place.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>Examples</HeadingLinkId>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [1, 2, 3, 4, 5, 6], 2
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[5, 6, 1, 2, 3, 4]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [1, 2, 3, 4, 5], 4
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[2, 3, 4, 5, 1]</Highlight>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Constraints</HeadingLinkId>
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
