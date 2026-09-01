import type { Metadata } from "next";

import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Find Second Largest Number",
};

export default function Page() {
  return (
    <main>
      <ReferenceNav reference={reference} />

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-13">
              Find Second Largest Number
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            Given an array of positive numbers. Find the second largest number
            from the array. If the second largest number doesn't exist then
            return -1.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>Examples</HeadingLinkId>
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
            <HeadingLinkId headingNumber={3}>Constraints</HeadingLinkId>
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
