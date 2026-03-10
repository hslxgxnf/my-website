import type { Metadata } from "next";

import styles from "@/styles/detail-page/page.module.css";
import { reference, headings } from "@/app/web/html/entities/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import HighlightText from "@/components/detail-page/HighlightText";
import HighlightCode from "@/components/detail-page/HighlightCode";
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
              <HighlightText>Less-Than &lt;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;lt;</HighlightCode>
            </li>
            <li>
              <HighlightText>Greater-Than &gt;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;gt;</HighlightCode>
            </li>
            <li>
              <HighlightText>Copyright &copy;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;copy;</HighlightCode>
            </li>
            <li>
              <HighlightText>Trade Mark &trade;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;trade;</HighlightCode>
            </li>
            <ReferenceButton>
              <li>
                <HighlightText>Non-Breaking Space &nbsp;</HighlightText>{" "}
                <HighlightCode copy={true}>&amp;nbsp;</HighlightCode>
                <br />
                The <HighlightCode copy={true}>&amp;nbsp;</HighlightCode> entity
                is a space without creating a new line.
                <br />
                The <HighlightCode copy={true}>&amp;nbsp;</HighlightCode> entity
                can be used to write two or more spaces in a row.
              </li>
            </ReferenceButton>
            <li>
              <HighlightText>Ampersand &amp;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;amp;</HighlightCode>
            </li>
            <li>
              <HighlightText>Quotation Mark "</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;quot;</HighlightCode>
            </li>
            <li>
              <HighlightText>Apostrophe '</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;apos;</HighlightCode>
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
              <HighlightText>Left Brace &#123;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;#123;</HighlightCode>
            </li>
            <li>
              <HighlightText>Right Brace &#125;</HighlightText>{" "}
              <HighlightCode copy={true}>&amp;#125;</HighlightCode>
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
