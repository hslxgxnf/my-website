import type { Metadata } from "next";

import { reference, code } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import SRHelper from "@/components/main-description/SRHelper";
import ToggleList from "@/components/main-description/ToggleList";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "SQL",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-10-31">
              SQL (Structured Query Language)
            </Heading>
          </RefButton>
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
            Horizontal items are called rows, records, or entries, whereas
            vertical ones are called columns or fields.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Comments
          </Heading>
          <Highlight type="complex-code">{code}</Highlight>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Naming Cases
          </Heading>
          <p>
            <Highlight type="text">SQL</Highlight> is case-insensitive, but
            using <Highlight type="text">UPPERCASE</Highlight> for keywords and{" "}
            <Highlight type="text">snake_case</Highlight> for identifiers is
            recommended.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Statement Delimiter
          </Heading>
          <p>
            Statements must end with a semicolon, except for a single statement.
            Adding a semicolon to it is recommended, though.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Statements
          </Heading>
          <p>
            A statement consists of clauses, and a clause consists of keywords,
            identifiers, operators, and values (expressions).
          </p>
          <p>The order of clauses must be maintained. </p>
          <p>
            Use double quotes around identifiers to avoid conflicts with
            reserved keywords.
          </p>
          <p>Use single quotes around string values.</p>
          <section>
            <Heading type="link-id" number={3}>
              DCL (Data Control Language)
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">GRANT</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">REVOKE</Highlight>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              DDL (Data Definition Language)
            </Heading>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">CREATE</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">ALTER</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">DROP</Highlight>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              DML (Data Manipulation Language)
            </Heading>
            <ul>
              <ToggleList
                summary={
                  <p>
                    <Highlight type="simple-code">SELECT</Highlight>
                  </p>
                }
                content={
                  <ul>
                    <li>
                      <p>
                        <Highlight type="simple-code">SELECT</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">FROM</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">JOIN</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">WHERE</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">GROUP BY</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">HAVING</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">ORDER BY</Highlight>{" "}
                        <SRHelper type="next" />{" "}
                        <Highlight type="simple-code">LIMIT</Highlight>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Highlight type="simple-code">
                          SELECT * FROM employees WHERE name = 'Bob' AND salary
                          &gt; 5000;
                        </Highlight>
                      </p>
                      <ul>
                        <li>
                          <p>Clauses</p>
                          <ul>
                            <li>
                              <p>
                                <Highlight type="simple-code">
                                  SELECT *
                                </Highlight>
                              </p>
                            </li>
                            <li>
                              <p>
                                <Highlight type="simple-code">
                                  FROM employees
                                </Highlight>
                              </p>
                            </li>
                            <li>
                              <p>
                                <Highlight type="simple-code">
                                  WHERE name = 'Bob' AND salary &gt; 5000
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
                            <li>
                              <p>
                                <Highlight type="simple-code">AND</Highlight>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>Identifiers</p>
                          <ul>
                            <li>
                              <p>
                                <Highlight type="simple-code">
                                  employees
                                </Highlight>
                              </p>
                            </li>
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
                          </ul>
                        </li>
                        <li>
                          <p>Operators</p>
                          <ul>
                            <li>
                              <p>
                                <Highlight type="simple-code">*</Highlight>
                              </p>
                            </li>
                            <li>
                              <p>
                                <Highlight type="simple-code">=</Highlight>
                              </p>
                            </li>
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
                                <Highlight type="simple-code">'Bob'</Highlight>
                              </p>
                            </li>
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
                }
              />
              <li>
                <p>
                  <Highlight type="simple-code">INSERT</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">UPDATE</Highlight>
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">DELETE</Highlight>
                </p>
              </li>
            </ul>
          </section>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
