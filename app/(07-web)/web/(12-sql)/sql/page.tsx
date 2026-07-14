import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "SQL",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-14">
            SQL (Structured Query Language)
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          <Highlight type="text">SQL</Highlight> is used for managing data in
          RDBMS (Relational Database Management Systems).
        </p>
        <p>
          Data is normalized that is split across multiple tables rather than a
          big single table.
        </p>
        <p>
          Vertical data is called columns or fields. Horizontal data is called
          rows, records, or entries.
        </p>
        <ul>
          <li>
            <p>
              <Highlight type="simple-code">
                SELECT name, salary FROM employees WHERE salary &gt; 5000;
              </Highlight>
            </p>
            <ul>
              <li>
                <p>Clauses</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">
                        SELECT name, salary
                      </Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">FROM employees</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">
                        WHERE salary &gt; 5000;
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Keywords</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">SELECT</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">FROM</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">WHERE</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Identifiers</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">name</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">salary</Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Highlight type="simple-code">employees</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Operators</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">&gt;</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Values (Expressions)</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">5000</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
