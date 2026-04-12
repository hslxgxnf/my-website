import type { Metadata } from "next";

import styles from "@/styles/non-root/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Properties & Methods",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Properties & Methods</HeadingLinkId>
        </ReferenceButton>
        <ul>
          <li>
            <Highlight type="simple-code">window</Highlight>
          </li>
          <li>
            <Highlight type="simple-code">document</Highlight>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">document.documentElement</Highlight>
            </p>
            <p>
              <Highlight type="simple-code">&lt;html&gt;</Highlight>
            </p>{" "}
          </li>
          <li>
            <p>
              <Highlight type="simple-code">document.head</Highlight>
            </p>
            <p>
              <Highlight type="simple-code">&lt;head&gt;</Highlight>
            </p>
          </li>
          <li>
            <Highlight type="simple-code">document.title</Highlight>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">document.body</Highlight>
            </p>
            <p>
              <Highlight type="simple-code">&lt;body&gt;</Highlight>
            </p>
          </li>
          <hr />
          <li>
            <Highlight type="simple-code">Node.parentNode</Highlight>
          </li>
          <li>
            <Highlight type="simple-code">Node.parentElement</Highlight>
          </li>
          {/*Here Let's gogo*/}
          <hr />
          <ReferenceButton>
            <li>
              <p>
                <Highlight type="simple-code">Element.className</Highlight>
              </p>
              <p>
                The{" "}
                <Highlight type="simple-code">
                  String.prototype.includes()
                </Highlight>{" "}
                method doesn't matter the exact match of an argument, but just
                matters the inclusion.
              </p>
            </li>
          </ReferenceButton>
          <ReferenceButton>
            <li>
              <p>
                <Highlight type="simple-code">Element.classList</Highlight>
              </p>
              <p>
                The{" "}
                <Highlight type="simple-code">
                  DOMTokenList.contains()
                </Highlight>{" "}
                method matters the exact match of an argument.
              </p>
              <p>
                <Highlight type="simple-code">DOMTokenList.add()</Highlight>{" "}
                <Highlight type="simple-code">DOMTokenList.remove()</Highlight>{" "}
                <Highlight type="simple-code">DOMTokenList.toggle()</Highlight>{" "}
                <Highlight type="simple-code">DOMTokenList.replace()</Highlight>
              </p>
            </li>
          </ReferenceButton>
        </ul>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
