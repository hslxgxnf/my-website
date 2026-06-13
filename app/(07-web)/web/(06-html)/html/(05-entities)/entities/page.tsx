import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Entities",
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
            <HeadingLinkId headingNumber={1} lastUpdated="2026-02-10">
              Entities
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Named Entities</HeadingLinkId>
          <p>
            Named entities can use both the named format and the numeric format.
          </p>
          <ul>
            <li>
              <Highlight type="text">Less-Than &lt;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;lt;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#60;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Greater-Than &gt;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;gt;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#62;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Copyright &copy;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;copy;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#169;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Trade Mark &trade;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;trade;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#8482;
              </Highlight>
            </li>
            <ReferenceButton>
              <li>
                <p>
                  <Highlight type="text">Non-Breaking Space &nbsp;</Highlight>{" "}
                  <Highlight type="simple-code" copy={true}>
                    &amp;nbsp;
                  </Highlight>{" "}
                  <Highlight type="simple-code" copy={true}>
                    &amp;#160;
                  </Highlight>
                </p>
                <p>
                  The{" "}
                  <Highlight type="simple-code" copy={true}>
                    &amp;nbsp;
                  </Highlight>{" "}
                  entity is a space without creating a new line and can be used
                  to write two or more spaces in a row.
                </p>
              </li>
            </ReferenceButton>
            <li>
              <Highlight type="text">Ampersand &amp;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;amp;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#38;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Quotation Mark "</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;quot;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#34;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Apostrophe '</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;apos;
              </Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#39;
              </Highlight>
            </li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Unnamed Entities</HeadingLinkId>
          <p>Unnamed entities only can use the numeric format.</p>
          <ul>
            <li>
              <Highlight type="text">Left Brace &#123;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#123;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Right Brace &#125;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;#125;
              </Highlight>
            </li>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
