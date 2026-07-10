import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Reverse Array",
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
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-10">
              Reverse Array
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Problem</HeadingLinkId>
          <p>
            You are given an array of integers. You have to reverse the given
            array in place, meaning you should not use extra space for another
            array.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>Examples</HeadingLinkId>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [1, 4, 3, 2, 6, 5]
                  </Highlight>{" "}
                  &#10140;{" "}
                  <Highlight type="simple-code">[5, 6, 2, 3, 4, 1]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [4, 5, 2]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">[2, 5, 4]</Highlight>
                </p>
              </li>

              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [1]
                  </Highlight>{" "}
                  &#10140; <Highlight type="simple-code">[1]</Highlight>
                </p>
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
