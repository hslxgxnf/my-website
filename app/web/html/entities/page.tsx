import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference } from "@/app/web/html/entities/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";

export const metadata: Metadata = {
  title: "Entities",
};

export default function EntitiesPage() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1}>Entities</HeadingLinkId>
        </ReferenceButton>
        <ul>
          <li>
            <code className="emphasis">Less-Than &lt;</code>{" "}
            <code className="example">&amp;lt;</code>
          </li>
          <li>
            <code className="emphasis">Greater-Than &gt;</code>{" "}
            <code className="example">&amp;gt;</code>
          </li>
          <li>
            <code className="emphasis">Copyright &copy;</code>{" "}
            <code className="example">&amp;copy;</code>
          </li>
          <li>
            <code className="emphasis">Trade Mark &trade;</code>{" "}
            <code className="example">&amp;trade;</code>
          </li>
          <ReferenceButton>
            <li>
              <code className="emphasis">Non-Breaking Space &nbsp;</code>{" "}
              <code className="example">&amp;nbsp;</code>
              <br />
              The <code className="example">&amp;nbsp;</code> entity is a space
              without creating a new line.
              <br />
              The <code className="example">&amp;nbsp;</code> entity can be used
              to write two or more spaces in a row.
            </li>
          </ReferenceButton>
          <li>
            <code className="emphasis">Ampersand &amp;</code>{" "}
            <code className="example">&amp;amp;</code>
          </li>
          <li>
            <code className="emphasis">Quotation Mark &quot;</code>{" "}
            <code className="example">&amp;quot;</code>
          </li>
          <li>
            <code className="emphasis">Apostrophe &apos;</code>{" "}
            <code className="example">&amp;apos;</code>
          </li>
        </ul>
      </article>

      <aside></aside>
    </main>
  );
}
