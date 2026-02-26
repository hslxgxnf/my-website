import type { Metadata } from "next";

import styles from "@/styles/pages/start/page.module.css";
import HeadingLink from "@/components/pages/start/HeadingLink";

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
          <HeadingLink>Line Separators</HeadingLink>
          <HeadingLink>Security</HeadingLink>
          <HeadingLink>Deployment</HeadingLink>
          <HeadingLink>SEO</HeadingLink>
          <HeadingLink>CSR vs. SSR</HeadingLink>
        </section>
        <hr />
        <section>
          <h2>Initialization</h2>
          <HeadingLink>npm</HeadingLink>
          <HeadingLink>pnpm</HeadingLink>
          <HeadingLink>concurrently</HeadingLink>
          <HeadingLink>Prettier</HeadingLink>
          <HeadingLink>ESLint</HeadingLink>
        </section>
        <hr />
        <section>
          <h2>HTML</h2>
          <HeadingLink>HTML</HeadingLink>
        </section>
        <hr />
        <section>
          <h2>CSS</h2>
          <HeadingLink>CSS</HeadingLink>
          <HeadingLink>Tailwind CSS</HeadingLink>
        </section>
        <hr />
        <section>
          <h2>JavaScript</h2>
          <HeadingLink>Vanilla</HeadingLink>
          <HeadingLink>React</HeadingLink>
          <HeadingLink>Next.js</HeadingLink>
        </section>
      </article>

      <aside></aside>
    </main>
  );
}
