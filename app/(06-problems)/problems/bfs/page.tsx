import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import SRHelper from "@/components/main-description/SRHelper";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "BFS",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-09-30">
              BFS
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Problem
          </Heading>
          <p>
            Given an adjacency list, perform BFS. Start from vertex 0, visit the
            vertices in the exact order as they appear in the given adjacency
            list, and ensure all vertices are visited.
          </p>
          <section>
            <Heading type="link-id" number={3}>
              Examples
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [[2, 3, 1], [0], [0, 4], [0], [2]]
                  </Highlight>{" "}
                  <SRHelper type="output" />{" "}
                  <Highlight type="simple-code">[0, 2, 3, 1, 4]</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code" copy={true}>
                    [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]
                  </Highlight>{" "}
                  <SRHelper type="output" />{" "}
                  <Highlight type="simple-code">[0, 1, 2, 3, 4]</Highlight>
                </p>
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
                  <Highlight type="math">
                    {`1 \\le V \\le 10^4 \\ (\\text{where } V \\text{ is the number of vertices})`}
                  </Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="math">{`0 \\le \\text{Vertex Index} \\le 10^4`}</Highlight>
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
                  <Highlight type="math">{`\\mathcal{O}(V + E) \\ (\\text{where } E \\text{ is the number of edges})`}</Highlight>
                </p>
              </li>
              <li>
                <p>
                  Auxiliary Space:{" "}
                  <Highlight type="math">{`\\mathcal{O}(V)`}</Highlight>
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
