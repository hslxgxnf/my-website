import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Graph",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-09-25">
              Graph
            </Heading>
          </RefButton>
          <p>A graph is a set of vertices (nodes) and edges (links).</p>
          <p>The degree of a vertex is the number of edges connected to it.</p>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Types
            </Heading>
          </RefButton>
          <ul>
            <li>
              <p>Size</p>
              <ul>
                <li>
                  <p>Finite Graph</p>
                </li>
                <li>
                  <p>Infinite Graph</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Structure</p>
              <ul>
                <li>
                  <p>Trivial Graph</p>
                  <ul>
                    <li>
                      <p>A trivial graph has only one vertex without edges.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Null Graph</p>
                  <ul>
                    <li>
                      <p>A null graph has vertices without edges.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Simple Graph</p>
                  <ul>
                    <li>
                      <p>
                        A simple graph does not have parallel and self-loop
                        edges. If two vertices are connected with more than one
                        edge, such edges are called parallel edges.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Complete (Full) Graph</p>
                  <ul>
                    <li>
                      <p>
                        A complete graph is a kind of simple graph in which
                        every vertex is connected to every other vertex.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Multi Graph</p>
                  <ul>
                    <li>
                      <p>
                        A multi graph has parallel edges and does not have
                        self-loop edges.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Pseudo Graph</p>
                  <ul>
                    <li>
                      <p>A pseudo graph has parallel and self-loop edges.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Regular Graph</p>
                  <ul>
                    <li>
                      <p>
                        A regular graph has all vertices with the same degree.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p>Weight</p>
              <ul>
                <li>
                  <p>Unweighted Graph</p>
                </li>
                <li>
                  <p>Weighted Graph</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Direction</p>
              <ul>
                <li>
                  <p>Undirected Graph</p>
                </li>
                <li>
                  <p>Directed Graph</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Density</p>
              <ul>
                <li>
                  <p>Sparse Graph</p>
                  <ul>
                    <li>
                      <p>
                        A sparse graph has a small number of edges compared to
                        the number of vertices.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Dense Graph</p>
                  <ul>
                    <li>
                      <p>
                        A dense graph has a large number of edges compared to
                        the number of vertices.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p>Connectivity</p>
              <ul>
                <li>
                  <p>Disconnected Graph</p>
                  <ul>
                    <li>
                      <p>
                        A disconnected graph is a graph in which there is no
                        path between at least one pair of vertices.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Connected Graph</p>
                  <ul>
                    <li>
                      <p>
                        A connected graph is a graph in which there is a path
                        between every pair of vertices.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p>Cycle</p>
              <ul>
                <li>
                  <p>Cyclic Graph</p>
                  <ul>
                    <li>
                      <p>
                        A cyclic graph has at least one cycle. A cycle is a
                        closed path that starts and ends at the same vertex,
                        with no other repeated vertices or edges.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Acyclic Graph</p>
                  <ul>
                    <li>
                      <p>
                        An acyclic graph does not have cycles. An undirected
                        acyclic graph is also known as a forest, and if it is
                        connected, it is called a tree.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Representation
          </Heading>
          <ul>
            <li>
              <p>Adjacency Matrix</p>
            </li>
            <li>
              <p>Adjacency List</p>
            </li>
          </ul>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Traversal
          </Heading>
          <ul>
            <li>
              <p>DFS (Depth First Search)</p>
              <ul>
                <li>
                  <p>
                    Explores as far as possible along each branch before
                    backtracking.
                  </p>
                </li>
                <li>
                  <p>Uses a stack or recursion.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>BFS (Breadth First Search)</p>
              <ul>
                <li>
                  <p>
                    Explores all neighbors of a vertex before moving to the next
                    vertex.
                  </p>
                </li>
                <li>
                  <p>Uses a queue.</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
