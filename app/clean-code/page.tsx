import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, code } from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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
            <HeadingLinkId headingNumber={1}>Clean Code</HeadingLinkId>
          </ReferenceButton>
          <p>Clean code should be readable.</p>
          <p>Clean code should be maintainable.</p>
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
          <hr />
          <p>
            Use nouns or short phrases with adjectives for variables and
            constants.
            <br />
            <Highlight type="simple-code">user</Highlight>{" "}
            <Highlight type="simple-code">isValid</Highlight>
          </p>
          <p>
            Use verbs or short phrases with adjectives for functions and
            methods.
            <br />
            <Highlight type="simple-code">saveUser</Highlight>{" "}
            <Highlight type="simple-code">auth.isValid</Highlight>
          </p>
          <p>
            Use nouns or short phrases with nouns for classes.
            <br />
            <Highlight type="simple-code">User</Highlight>
          </p>
          <hr />
          <p>
            <Highlight type="text">snake_case</Highlight>
          </p>
          <ul>
            <li>Python Variables, Functions</li>
          </ul>
          <p>
            <Highlight type="text">camelCase</Highlight>
          </p>
          <ul>
            <li>JavaScript Variables, Functions</li>
            <li>Java Variables, Functions</li>
          </ul>
          <p>
            <Highlight type="text">PascalCase</Highlight>
          </p>
          <ul>
            <li>Python Classes</li>
            <li>JavaScript Classes</li>
            <li>Java Classes</li>
          </ul>
          <p>
            <Highlight type="text">kebab-case</Highlight>
          </p>
          <ul>
            <li>HTML Element Attributes</li>
            <li>CSS Variables</li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Formatting</HeadingLinkId>
          <section>
            <HeadingLinkId headingNumber={3}>Vertical</HeadingLinkId>
            <p>Multiple concepts should be split into multiple files.</p>
            <p>Different concepts should be separated by spacing.</p>
            <p>Similar concepts should be together without spacing.</p>
            <p>Related concepts should be kept close together.</p>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Horizontal</HeadingLinkId>
            <p>Indentation</p>
            <p>
              Horizontally long statements should be broken into multiple
              shorter ones.
            </p>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Comments</HeadingLinkId>
          <p>Legal Information</p>
          <p>Warnings</p>
          <p>To-Do Notes</p>
          <p>
            Explanations which cannot be replaced by good naming are good
            comments.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Objects and Classes</HeadingLinkId>
          <p>Classes should have a single responsibility.</p>
          <p>
            Classes should be open for extension but closed for modification.
          </p>
          <p>
            Classes should be highly cohesive. Cohesion describes the extent to
            which methods rely on properties. Maximum cohesion is that every
            method uses every property. Minimum cohesion is that methods do not
            use any properties.
          </p>
          <p>Law of Demeter: Tell! Don't Ask!</p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Functions</HeadingLinkId>
          <p>Don't Repeat Yourself (DRY)</p>
          <p>
            Multiple parameters can be minimized into one. You don't have to
            concern the order of parameters.
          </p>
          <Highlight type="complex-code">{code}</Highlight>
          <p>
            A big function should be split into small functions that do one
            thing. The name of a function implies its level of abstraction. In a
            big function, small functions should have the same level of
            abstraction.
          </p>
          <p>
            In a function, when something affects outside of the function, it is
            called a side effect. When a function has a side effect, the name of
            the function should imply that the side effect will occur.
            <br />
            <Highlight type="simple-code">saveUser</Highlight>{" "}
            <Highlight type="simple-code">showErrorMessage</Highlight>
            <br />A pure function always yields the same output with the same
            input and has no side effects.
          </p>
          <p>
            Function names should be positive.
            <br />
            <Highlight type="simple-code">isEmpty</Highlight>{" "}
            <Highlight type="simple-code">isValid</Highlight>
          </p>
          <p>Unit testing helps functions to be clean.</p>
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
