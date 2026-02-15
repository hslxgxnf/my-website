import Link from "next/link";
import { Ref } from "react";

import styles from "@/pages/clean-code/Main.module.css";
import handleClickFirstLink from "@/utils/functions/handleClickFirstLink";

interface Heading {
  title: string;
  tag: string;
}

interface SideNavProps {
  ref: Ref<HTMLElement>;
  headings: Array<Heading>;
}

export default function SideNav({ ref, headings }: SideNavProps) {
  return (
    <nav ref={ref}>
      <header>On this page</header>
      <main>
        <ul>
          {headings.map((heading, index) => {
            const id = heading.title.replace(/\s/g, "-").toLowerCase();

            switch (heading.tag) {
              case "h1":
                return (
                  <li key={index}>
                    <Link
                      href={`#${id}`}
                      onClick={(event) => handleClickFirstLink(event, id)}
                    >
                      {heading.title}
                    </Link>
                    <hr />
                  </li>
                );
              case "h2":
                return (
                  <li key={index}>
                    <Link href={`#${id}`}>{heading.title}</Link>
                  </li>
                );
              case "h3":
                return (
                  <li key={index} className={styles.indent}>
                    <Link href={"#vertical"}>{heading.title}</Link>
                  </li>
                );
            }
          })}
        </ul>
      </main>
    </nav>
  );
}
