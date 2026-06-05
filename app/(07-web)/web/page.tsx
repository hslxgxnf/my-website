import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import ReferenceNav from "@/components/main/ReferenceNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Web",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav />
      </aside>

      <article>
        <h1>Web</h1>
        <hr />
        <h2>Overall</h2>
        {/*<HeadingLinkPage>Line Separators</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>Security</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>Deployment</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>SEO</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>CSR vs. SSR</HeadingLinkPage>*/}
        <hr />
        <h2>Initialization</h2>
        <HeadingLinkPage>npm</HeadingLinkPage>
        <HeadingLinkPage>npm-check-updates</HeadingLinkPage>
        <HeadingLinkPage>Prettier</HeadingLinkPage>
        <HeadingLinkPage>Stylelint</HeadingLinkPage>
        <HeadingLinkPage>ESLint</HeadingLinkPage>
        <hr />
        <h2>HTML</h2>
        <HeadingLinkPage>HTML</HeadingLinkPage>
        <hr />
        <h2>CSS</h2>
        <HeadingLinkPage>CSS</HeadingLinkPage>
        <HeadingLinkPage>SCSS</HeadingLinkPage>
        {/*<HeadingLinkPage>Tailwind CSS</HeadingLinkPage>*/}
        <hr />
        <h2>JavaScript</h2>
        <HeadingLinkPage>Vanilla</HeadingLinkPage>
        {/*<HeadingLinkPage>React</HeadingLinkPage>*/}
        <HeadingLinkPage>Next.js</HeadingLinkPage>
      </article>

      <aside></aside>
    </main>
  );
}
