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
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-20">
              SQL (Structured Query Language)
            </HeadingLinkId>
          </ReferenceButton>
          <p>
            <Highlight type="text">SQL</Highlight> is used for managing data in
            Relational Database Management Systems (RDBMS). It allows users to
            create, read, update, and delete (CRUD) data.
          </p>
          <p>
            Data is normalized, meaning it is split across related tables rather
            than stored in a single large table. Tables are connected to each
            other using keys.
          </p>
          <p>
            Vertical data elements are called columns or fields. Horizontal data
            elements are called rows, records, or entries.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Comments</HeadingLinkId>
          <Highlight type="complex-code">{code}</Highlight>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Naming Cases</HeadingLinkId>
          <p>
            While <Highlight type="text">SQL</Highlight> is case-insensitive, it
            is recommended to use uppercase for keywords and lowercase for
            identifiers.
          </p>
          <p>
            Identifiers should be written in{" "}
            <Highlight type="text">snake_case</Highlight>.
            <br />
            Use double quotes around identifiers to avoid conflicts with
            reserved keywords.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Statement Delimiter</HeadingLinkId>
          <p>
            Multiple statements must end with a semicolon, while a single
            statement can omit it. Regardless, adding one is recommended.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Statements</HeadingLinkId>
          <p>
            A statement consists of clauses.
            <br />A clause consists of keywords, identifiers, operators, and
            values (expressions).
          </p>
          <p>
            The order of clauses must be maintained.{" "}
            <Highlight type="simple-code">SELECT</Highlight> &rarr;{" "}
            <Highlight type="simple-code">FROM</Highlight> &rarr;{" "}
            <Highlight type="simple-code">WHERE</Highlight>
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
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Data Types</HeadingLinkId>
          <ul>
            <li>
              <p>String</p>
            </li>
            <li>
              <p>Number</p>
            </li>
            <li>
              <p>Date</p>
            </li>
            <li>
              <p>Time</p>
            </li>
            <li>
              <p>Boolean</p>
            </li>
            <li>
              <p>File</p>
            </li>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
