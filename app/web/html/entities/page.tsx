import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, headings } from "@/app/web/html/entities/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import CodeExampleCopy from "@/components/detail-page/CodeExampleCopy";
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
              <code className="emphasis">Less-Than &lt;</code>{" "}
              <CodeExampleCopy>&amp;lt;</CodeExampleCopy>
            </li>
            <li>
              <code className="emphasis">Greater-Than &gt;</code>{" "}
              <CodeExampleCopy>&amp;gt;</CodeExampleCopy>
            </li>
            <li>
              <code className="emphasis">Copyright &copy;</code>{" "}
              <CodeExampleCopy>&amp;copy;</CodeExampleCopy>
            </li>
            <li>
              <code className="emphasis">Trade Mark &trade;</code>{" "}
              <CodeExampleCopy>&amp;trade;</CodeExampleCopy>
            </li>
            <ReferenceButton>
              <li>
                <code className="emphasis">Non-Breaking Space &nbsp;</code>{" "}
                <CodeExampleCopy>&amp;nbsp;</CodeExampleCopy>
                <br />
                The <CodeExampleCopy>&amp;nbsp;</CodeExampleCopy> entity is a
                space without creating a new line.
                <br />
                The <CodeExampleCopy>&amp;nbsp;</CodeExampleCopy> entity can be
                used to write two or more spaces in a row.
              </li>
            </ReferenceButton>
            <li>
              <code className="emphasis">Ampersand &amp;</code>{" "}
              <CodeExampleCopy>&amp;amp;</CodeExampleCopy>
            </li>
            <li>
              <code className="emphasis">Quotation Mark "</code>{" "}
              <CodeExampleCopy>&amp;quot;</CodeExampleCopy>
            </li>
            <li>
              <code className="emphasis">Apostrophe '</code>{" "}
              <CodeExampleCopy>&amp;apos;</CodeExampleCopy>
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
              <code className="emphasis">Left Brace &#123;</code>{" "}
              <CodeExampleCopy>&amp;#123;</CodeExampleCopy>
            </li>
            <li>
              <code className="emphasis">Right Brace &#125;</code>{" "}
              <CodeExampleCopy>&amp;#125;</CodeExampleCopy>
            </li>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav headings={headings} />
      </aside>
    </main>
  );
}
