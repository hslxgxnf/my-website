import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Web",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          Web
        </Heading>
        <hr />
        <Heading type="none" number={2}>
          Overall
        </Heading>
        {/*<Heading type="link-page" number={3}>*/}
        {/*  Line Separators*/}
        {/*</Heading>*/}
        {/*<Heading type="link-page" number={3}>*/}
        {/*  Security*/}
        {/*</Heading>*/}
        {/*<Heading type="link-page" number={3}>*/}
        {/*  Deployment*/}
        {/*</Heading>*/}
        {/*<Heading type="link-page" number={3}>*/}
        {/*  SEO*/}
        {/*</Heading>*/}
        {/*<Heading type="link-page" number={3}>*/}
        {/*  CSR vs. SSR*/}
        {/*</Heading>*/}
        <hr />
        <Heading type="none" number={2}>
          Initialization
        </Heading>
        <Heading type="link-page" number={3}>
          npm
        </Heading>
        <Heading type="link-page" number={3}>
          npm-check-updates
        </Heading>
        <Heading type="link-page" number={3}>
          Prettier
        </Heading>
        <Heading type="link-page" number={3}>
          Stylelint
        </Heading>
        <Heading type="link-page" number={3}>
          ESLint
        </Heading>
        <hr />
        <Heading type="none" number={2}>
          HTML
        </Heading>
        <Heading type="link-page" number={3}>
          HTML
        </Heading>
        <hr />
        <Heading type="none" number={2}>
          CSS
        </Heading>
        <Heading type="link-page" number={3}>
          CSS
        </Heading>
        <Heading type="link-page" number={3}>
          SCSS
        </Heading>
        {/*<Heading type="link-page" number={3}>*/}
        {/*  Tailwind CSS*/}
        {/*</Heading>*/}
        <hr />
        <Heading type="none" number={2}>
          JavaScript
        </Heading>
        <Heading type="link-page" number={3}>
          Vanilla
        </Heading>
        <Heading type="link-page" number={3}>
          TypeScript
        </Heading>
        {/*<Heading type="link-page" number={3}>*/}
        {/*  React*/}
        {/*</Heading>*/}
        <Heading type="link-page" number={3}>
          Next.js
        </Heading>
        <hr />
        <Heading type="none" number={2}>
          Databases
        </Heading>
        <Heading type="link-page" number={3}>
          SQL
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
