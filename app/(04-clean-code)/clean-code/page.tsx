import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, paramterOptimizationCode, lawOfDemeterCode } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Clean Code",
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
            <HeadingLinkId headingNumber={1} lastUpdated="2026-07-21">
              Clean Code
            </HeadingLinkId>
          </ReferenceButton>
          <p>Clean code should be readable.</p>
          <p>Clean code should be maintainable.</p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Formatting</HeadingLinkId>
          <section>
            <HeadingLinkId headingNumber={3}>Vertical</HeadingLinkId>
            <p>
              Different concepts should be separated by blank lines, while
              closely related concepts should be kept together without blank
              lines.
            </p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Horizontal</HeadingLinkId>
            <p>Indentation</p>
            <p>
              Horizontally long statements should be broken down into multiple
              shorter ones.
            </p>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Comments</HeadingLinkId>
          <p>
            Comments which cannot be replaced by good naming are good comments.
            Legal information, warnings, and to-do notes are legitimate reasons
            to write comments.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Naming</HeadingLinkId>
          <p>Names should be meaningful.</p>
          <p>Names should be distinctive.</p>
          <p>Names should be consistent.</p>
          <p>
            Names should not include redundant information, disinformation,
            slang, or unclear abbreviations.
          </p>
          <section>
            <HeadingLinkId headingNumber={3}>
              Step 1: Choose a Case
            </HeadingLinkId>
            <ul>
              <li>
                <p>
                  <Highlight type="text">lowercase</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">isclicked</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="text">kebab-case</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">is-clicked</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="text">camelCase</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">isClicked</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="text">snake_case</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">is_clicked</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="text">UPPERCASE</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">ISCLICKED</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <Highlight type="text">PascalCase</Highlight>
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">IsClicked</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>
              Step 2: Choose a Part of Speech
            </HeadingLinkId>
            <ul>
              <li>
                <p>Use nouns or noun phrases for variables and constants.</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">user</Highlight>,{" "}
                      <Highlight type="simple-code">isValid</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Use verbs or verb phrases for functions.</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">print</Highlight>,{" "}
                      <Highlight type="simple-code">printInfo</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Use nouns or noun phrases for classes.</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code">User</Highlight>,{" "}
                      <Highlight type="simple-code">UserAuth</Highlight>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Functions</HeadingLinkId>
          <section>
            <HeadingLinkId headingNumber={3}>
              Don't Repeat Yourself (DRY)
            </HeadingLinkId>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>
              Parameter Optimization
            </HeadingLinkId>
            <p>
              Multiple parameters can be consolidated into a single object
              parameter. This eliminates the need to maintain a strict order of
              arguments.
            </p>
            <Highlight type="complex-code">
              {paramterOptimizationCode}
            </Highlight>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>
              Function Single Responsibility
            </HeadingLinkId>
            <p>
              A bloated function should be split into smaller functions that do
              only one thing. Smaller functions should maintain the same level
              of abstraction.
            </p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Side Effects</HeadingLinkId>
            <p>
              When a function affects the outside of its scope, it is called a
              side effect. If a function has a side effect, its name should
              imply the impact (e.g.,{" "}
              <Highlight type="simple-code">saveUser</Highlight>,{" "}
              <Highlight type="simple-code">showErrorMessage</Highlight>).
            </p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Pure Functions</HeadingLinkId>
            <p>
              Pure functions yield the same output for the same input and have
              no side effects.
            </p>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Classes</HeadingLinkId>
          <section>
            <HeadingLinkId headingNumber={3}>
              Class Single Responsibility
            </HeadingLinkId>
            <p>Classes should have a single responsibility.</p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Open/Closed</HeadingLinkId>
            <p>
              Classes should be open for extension but closed for modification.
            </p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Cohesion</HeadingLinkId>
            <p>
              Classes should be highly cohesive. Cohesion describes the extent
              to which methods rely on properties. Maximum cohesion occurs when
              every method uses every property, while minimum cohesion occurs
              when methods do not use any properties.
            </p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Law of Demeter</HeadingLinkId>
            <p>
              An object should communicate only with its immediate neighbors.
            </p>
            <Highlight type="complex-code">{lawOfDemeterCode}</Highlight>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Control Structures</HeadingLinkId>
          <p>
            Avoid deep nesting by using error guards to fail fast, factory
            functions, and polymorphism.
          </p>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
