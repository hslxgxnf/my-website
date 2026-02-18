"use client";

import { useRef } from "react";

import styles from "./Main.module.css";
import { reference, code } from "./data";
import ReferenceButton from "@/utils/components/ReferenceButton";
import HeadingLink from "@/utils/components/HeadingLink";
import PreCode from "@/utils/components/PreCode";
import SideNav from "@/utils/components/SideNav";

export default function Main() {
  const articleRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main}>
      <aside></aside>

      <article ref={articleRef}>
        <section>
          <ReferenceButton reference={reference}>
            <HeadingLink headingNumber={1}>Clean Code</HeadingLink>
          </ReferenceButton>
          <p>Clean code should be readable.</p>
          <p>Clean code should be maintainable.</p>
        </section>
        <section>
          <HeadingLink headingNumber={2}>Naming</HeadingLink>
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
            <code className="example">user</code>&nbsp;
            <code className="example">isValid</code>
          </p>
          <p>
            Use verbs or short phrases with adjectives for functions and
            methods.
            <br />
            <code className="example">saveUser</code>&nbsp;
            <code className="example">auth.isValid</code>
          </p>
          <p>
            Use nouns or short phrases with nouns for classes.
            <br />
            <code className="example">User</code>
          </p>
          <hr />
          <p>
            <code className="emphasis">snake_case</code>
          </p>
          <ul>
            <li>Python Variables, Functions</li>
          </ul>
          <p>
            <code className="emphasis">camelCase</code>
          </p>
          <ul>
            <li>JavaScript Variables, Functions</li>
            <li>Java Variables, Functions</li>
          </ul>
          <p>
            <code className="emphasis">PascalCase</code>
          </p>
          <ul>
            <li>Python Classes</li>
            <li>JavaScript Classes</li>
            <li>Java Classes</li>
          </ul>
          <p>
            <code className="emphasis">kebab-case</code>
          </p>
          <ul>
            <li>HTML Element Attributes</li>
            <li>CSS Variables</li>
          </ul>
        </section>
        <section>
          <HeadingLink headingNumber={2}>Formatting</HeadingLink>
          <section>
            <HeadingLink headingNumber={3}>Vertical</HeadingLink>
            <p>Multiple concepts should be split into multiple files.</p>
            <p>Different concepts should be separated by spacing.</p>
            <p>Similar concepts should be together without spacing.</p>
            <p>Related concepts should be kept close together.</p>
          </section>
          <section>
            <HeadingLink headingNumber={3}>Horizontal</HeadingLink>
            <p>Indentation</p>
            <p>
              Horizontally long statements should be broken into multiple
              shorter ones.
            </p>
          </section>
        </section>
        <section>
          <HeadingLink headingNumber={2}>Comments</HeadingLink>
          <p>Legal Information</p>
          <p>Warnings</p>
          <p>To-Do Notes</p>
          <p>
            Explanations which cannot be replaced by good naming are good
            comments.
          </p>
        </section>
        <section>
          <HeadingLink headingNumber={2}>Objects and Classes</HeadingLink>
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
          <p>Law of Demeter: Tell! Don&apos;t Ask!</p>
        </section>
        <section>
          <HeadingLink headingNumber={2}>Functions</HeadingLink>
          <p>Don&apos;t Repeat Yourself (DRY)</p>
          <p>
            Multiple parameters can be minimized into one. You don&apos;t have
            to concern the order of parameters.
          </p>
          <PreCode code={code} language="javascript" />
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
            <code className="example">saveUser</code>&nbsp;
            <code className="example">showErrorMessage</code>
            <br />A pure function always yields the same output with the same
            input and has no side effects.
          </p>
          <p>
            Function names should be positive.
            <br />
            <code className="example">isEmpty</code>&nbsp;
            <code className="example">isValid</code>
          </p>
          <p>Unit testing helps functions to be clean.</p>
        </section>
        <section>
          <HeadingLink headingNumber={2}>Control Structures</HeadingLink>
          <p>
            Avoid deep nesting by using error guards to fail fast, factory
            functions, and polymorphism.
          </p>
        </section>
      </article>

      <aside>
        <SideNav articleRef={articleRef} />
      </aside>
    </main>
  );
}
