import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "./data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

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
            <HeadingLinkId headingNumber={1}>Entities</HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Named Entities</HeadingLinkId>
          <p>Named entities can use both the named and numeric format.</p>
          <ul>
            <li>
              <Highlight type="text">Less-Than &lt;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;lt;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Greater-Than &gt;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;gt;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Copyright &copy;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;copy;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Trade Mark &trade;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;trade;
              </Highlight>
            </li>
            <ReferenceButton>
              <li>
                <Highlight type="text">Non-Breaking Space &nbsp;</Highlight>{" "}
                <Highlight type="simple-code" copy={true}>
                  &amp;nbsp;
                </Highlight>
                <br />
                The{" "}
                <Highlight type="simple-code" copy={true}>
                  &amp;nbsp;
                </Highlight>{" "}
                entity is a space without creating a new line.
                <br />
                The{" "}
                <Highlight type="simple-code" copy={true}>
                  &amp;nbsp;
                </Highlight>{" "}
                entity can be used to write two or more spaces in a row.
              </li>
            </ReferenceButton>
            <li>
              <Highlight type="text">Ampersand &amp;</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;amp;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Quotation Mark "</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;quot;
              </Highlight>
            </li>
            <li>
              <Highlight type="text">Apostrophe '</Highlight>{" "}
              <Highlight type="simple-code" copy={true}>
                &amp;apos;
              </Highlight>
            </li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Unnamed Entities</HeadingLinkId>
          <p>
            Unnamed entities cannot use the named format, and must use the the
            numeric format.
          </p>
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
