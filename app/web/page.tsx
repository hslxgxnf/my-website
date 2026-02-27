import type { Metadata } from "next";

import styles from "@/styles/junction-page/page.module.css";
import HeadingLinkPage from "@/components/junction-page/HeadingLinkPage";

export const metadata: Metadata = {
  title: "Web",
};

export default function WebPage() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <h1>Web</h1>
        <hr />
        <section>
          <h2>Overall</h2>
          <HeadingLinkPage>Line Separators</HeadingLinkPage>
          <HeadingLinkPage>Security</HeadingLinkPage>
          <HeadingLinkPage>Deployment</HeadingLinkPage>
          <HeadingLinkPage>SEO</HeadingLinkPage>
          <HeadingLinkPage>CSR vs. SSR</HeadingLinkPage>
        </section>
        <hr />
        <section>
          <h2>Initialization</h2>
          <HeadingLinkPage>npm</HeadingLinkPage>
          <HeadingLinkPage>pnpm</HeadingLinkPage>
          <HeadingLinkPage>concurrently</HeadingLinkPage>
          <HeadingLinkPage>Prettier</HeadingLinkPage>
          <HeadingLinkPage>ESLint</HeadingLinkPage>
        </section>
        <hr />
        <section>
          <h2>HTML</h2>
          <HeadingLinkPage>HTML</HeadingLinkPage>
        </section>
        <hr />
        <section>
          <h2>CSS</h2>
          <HeadingLinkPage>CSS</HeadingLinkPage>
          <HeadingLinkPage>Tailwind CSS</HeadingLinkPage>
        </section>
        <hr />
        <section>
          <h2>JavaScript</h2>
          <HeadingLinkPage>Vanilla</HeadingLinkPage>
          <HeadingLinkPage>React</HeadingLinkPage>
          <HeadingLinkPage>Next.js</HeadingLinkPage>
        </section>
      </article>

      <aside></aside>
    </main>
  );
}
