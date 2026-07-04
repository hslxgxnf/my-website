import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Second Largest",
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
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-04">
              Second Largest
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            Given an array of positive integers, return the second largest
            element from the array. If the second largest element doesn't exist
            then return -1. In other words, the second largest element should
            not be equal to the largest element.
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
                <ul>
                  <li>
                    <p>
                      The largest element of the array is 35 and the second
                      largest element is 34.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [10, 5, 10]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">5</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      The largest element of the array is 10 and the second
                      largest element is 5.
                    </p>
                  </li>
                </ul>
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
                      The largest element of the array is 10 and the second
                      largest element does not exist.
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
