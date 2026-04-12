import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

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
        {/*<HeadingLinkPage>npm</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>pnpm</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>concurrently</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>ESLint</HeadingLinkPage>*/}
        {/*<HeadingLinkPage>Prettier</HeadingLinkPage>*/}
        <HeadingLinkPage>Stylelint</HeadingLinkPage>
        <hr />
        <h2>HTML</h2>
        <HeadingLinkPage>HTML</HeadingLinkPage>
        <hr />
        <h2>CSS</h2>
        <HeadingLinkPage>CSS</HeadingLinkPage>
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
