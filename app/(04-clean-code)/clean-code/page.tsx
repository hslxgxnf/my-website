import type { Metadata } from "next";

import { reference, paramterOptimizationCode, lawOfDemeterCode } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Clean Code",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <RefButton>
            <Heading type="link-id" number={1} lastUpdated="2026-07-23">
              Clean Code
            </Heading>
          </RefButton>
          <p>Clean code should be readable.</p>
          <p>Clean code should be maintainable.</p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Formatting
          </Heading>
          <section>
            <Heading type="link-id" number={3}>
              Vertical
            </Heading>
            <p>
              Different concepts should be separated by blank lines, while
              closely related concepts should be kept together without blank
              lines.
            </p>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Horizontal
            </Heading>
            <p>Indentation</p>
            <p>
              Horizontally long statements should be broken down into multiple
              shorter ones.
            </p>
          </section>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Comments
          </Heading>
          <p>
            Comments which cannot be replaced by good naming are good comments.
            Legal information, warnings, and to-do notes are legitimate reasons
            to write comments.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Naming
          </Heading>
          <p>Names should be meaningful.</p>
          <p>Names should be distinctive.</p>
          <p>Names should be consistent.</p>
          <p>
            Names should not include redundant information, disinformation,
            slang, or unclear abbreviations.
          </p>
          <section>
            <Heading type="link-id" number={3}>
              Step 1: Choose a Case
            </Heading>
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
            <Heading type="link-id" number={3}>
              Step 2: Choose a Part of Speech
            </Heading>
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
          <Heading type="link-id" number={2}>
            Functions
          </Heading>
          <section>
            <Heading type="link-id" number={3}>
              Don't Repeat Yourself (DRY)
            </Heading>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Parameter Optimization
            </Heading>
            <p>
              Multiple parameters can be consolidated into a single object
              parameter. This eliminates the need to maintain the strict order
              of arguments.
            </p>
            <Highlight type="complex-code">
              {paramterOptimizationCode}
            </Highlight>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Function Single Responsibility
            </Heading>
            <p>
              A bloated function should be split into smaller functions that do
              only one thing. Smaller functions should maintain the same level
              of abstraction.
            </p>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Side Effects
            </Heading>
            <p>
              When a function affects the outside of its scope, it is called a
              side effect. If a function has a side effect, its name should
              imply the impact (e.g.,{" "}
              <Highlight type="simple-code">saveUser</Highlight>,{" "}
              <Highlight type="simple-code">showErrorMessage</Highlight>).
            </p>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Pure Functions
            </Heading>
            <p>
              Pure functions yield the same output for the same input and have
              no side effects.
            </p>
          </section>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Classes
          </Heading>
          <section>
            <Heading type="link-id" number={3}>
              Class Single Responsibility
            </Heading>
            <p>Classes should have a single responsibility.</p>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Open/Closed
            </Heading>
            <p>
              Classes should be open for extension but closed for modification.
            </p>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Cohesion
            </Heading>
            <p>
              Classes should be highly cohesive. Cohesion describes the extent
              to which methods rely on properties. Maximum cohesion occurs when
              every method uses every property, while minimum cohesion occurs
              when methods do not use any properties.
            </p>
          </section>
          <section>
            <Heading type="link-id" number={3}>
              Law of Demeter
            </Heading>
            <p>
              An object should communicate only with its immediate neighbors.
            </p>
            <Highlight type="complex-code">{lawOfDemeterCode}</Highlight>
          </section>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Control Structures
          </Heading>
          <p>
            Avoid deep nesting by using error guards to fail fast, factory
            functions, and polymorphism.
          </p>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
