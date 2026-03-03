import styles from "@/styles/detail-page/page.module.css";
import { reference, headings } from "@/app/web/html/elements/data";
import ReferenceNav from "@/components/detail-page/ReferenceNav";
import ReferenceButton from "@/components/detail-page/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import PageNav from "@/components/detail-page/PageNav";

export default function ClientMain() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1}>Elements</HeadingLinkId>
          </ReferenceButton>
          <p>
            Tags are case-insensitive, but it is recommended to use lowercase.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Normal Elements</HeadingLinkId>
          <p>
            <code className="example">
              &lt;Opening Tag&gt;Nested Content&lt;/Closing Tag&gt;
            </code>
          </p>
          <p>Normal elements can have nested elements and text nodes.</p>
          <p>
            The <code className="example">Nested Content</code> sets the default
            value.
            <br />
            <code className="example">
              &lt;textarea&gt;Default&lt;/textarea&gt;
            </code>
          </p>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Void Elements</HeadingLinkId>
          </ReferenceButton>

          <p>
            <code className="example">&lt;Tag /&gt;</code>
          </p>
          <p>
            The trailing slash is not required, but it makes XHTML-compatible
            and more readable.
          </p>
          <p>Void elements cannot have nested elements and text nodes.</p>
          <p>
            The <code className="example">value</code> attribute sets the
            default value.
            <br />
            <code className="example">
              &lt;input value=&quot;Default&quot; /&gt;
            </code>
          </p>
          <ul>
            <li>
              <code className="example">&lt;meta&gt;</code>
            </li>
            <li>
              <code className="example">&lt;link&gt;</code>
            </li>
            <li>
              <code className="example">&lt;img&gt;</code>
            </li>
            <li>
              <code className="example">&lt;input&gt;</code>
            </li>
            <li>
              <code className="example">&lt;hr&gt;</code>
            </li>
            <li>
              <code className="example">&lt;br&gt;</code>
            </li>
          </ul>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Content Categories</HeadingLinkId>
          </ReferenceButton>
          <ul>
            <li>
              <code className="example">&lt;!doctype html&gt;</code>
            </li>
            <li>
              <code className="example">&lt;html&gt;</code>
            </li>
            <li>
              <code className="example">&lt;head&gt;</code>
            </li>
            <ul>
              <li>
                <code className="example">&lt;meta&gt;</code>
              </li>
              <li>
                <code className="example">&lt;title&gt;</code>
              </li>
              <li>
                <code className="example">&lt;link&gt;</code>
                <br />
                External CSS, Favicon
              </li>
              <li>
                <code className="example">&lt;style&gt;</code>
                <br />
                Internal CSS
              </li>
              <li>
                <code className="example">&lt;script&gt;</code>{" "}
                <code className="example">&lt;noscript&gt;</code>
                <br />
                Can be nested in the{" "}
                <code className="example">&lt;body&gt;</code> element.
              </li>
            </ul>
            <li>
              <code className="example">&lt;body&gt;</code>
            </li>
            <ul>
              <li>
                <code className="example">&lt;header&gt;</code>
              </li>
              <li>
                <code className="example">&lt;main&gt;</code>
              </li>
              <li>
                <code className="example">&lt;footer&gt;</code>
              </li>
              <hr />
              <li>
                <code className="example">&lt;aside&gt;</code>
              </li>
              <li>
                <code className="example">&lt;nav&gt;</code>
              </li>
              <li>
                <code className="example">&lt;article&gt;</code>
                <br />
                Independent Content
              </li>
              <li>
                <code className="example">&lt;section&gt;</code>
                <br />
                Semantic Block Grouping
              </li>
              <li>
                <code className="example">&lt;div&gt;</code>
                <br />
                Non-Semantic Block Grouping
              </li>
              <li>
                <code className="example">&lt;span&gt;</code>
                <br />
                Non-Semantic Inline Grouping
              </li>
              <hr />
              <ReferenceButton>
                <li>
                  <code className="example">&lt;dialog&gt;</code>
                  <br />
                  Creates a modal or non-modal dialog box.
                  <br />
                  The <code className="example">closedby</code> attribute
                  controls how the dialog can be dismissed.
                  <br />
                  The <code className="example">
                    closedby=&quot;any&quot;
                  </code>{" "}
                  attribute closes the dialog by a light dismiss user action
                  (e.g., clicking the backdrop), a platform-specific user action
                  (e.g.,, pressing the ESC key) or a developer-specified
                  mechanism.
                  <br />
                  The{" "}
                  <code className="example">
                    closedby=&quot;closerquest&quot;
                  </code>{" "}
                  attribute closes the dialog by a platform-specific user
                  action, or a developer-specified mechanism. This option is the
                  default for modal dialogs.
                  <br />
                  The <code className="example">
                    closedby=&quot;none&quot;
                  </code>{" "}
                  attribute closes the dialog by a developer-specified
                  mechanism. This option is the default for non-modal dialogs.
                  <br />
                  The <code className="example">open</code> attribute is a
                  boolean attribute that determines whether the dialog is
                  currently displayed. Directly manipulating this attribute in
                  <code className="emphasis">HTML</code> is not recommended;
                  instead, use <code className="emphasis">JavaScript</code>{" "}
                  methods{" "}
                  <code className="example">HTMLDialogElement.show()</code>,{" "}
                  <code className="example">HTMLDialogElement.showModal()</code>
                  , and{" "}
                  <code className="example">HTMLDialogElement.close()</code> for
                  better control.
                </li>
              </ReferenceButton>
              <ReferenceButton>
                <li>
                  <code className="example">&lt;form&gt;</code>
                  <br />
                  The <code className="example">action</code> attribute defines
                  a URL to which form data will be submitted. After submission,
                  the current URL will be updated to the defined URL.
                  <br />
                  The <code className="example">
                    method=&quot;get&quot;
                  </code>{" "}
                  sends the form data as a query string after the existing URL.
                </li>
              </ReferenceButton>
              <li>
                <code className="example">&lt;fieldset&gt;</code>{" "}
                <code className="example">&lt;legend&gt;</code>
              </li>
              <li>
                <code className="example">&lt;label&gt;</code>
              </li>
              <li>
                <code className="example">&lt;input&gt;</code>
              </li>
              <li>
                <code className="example">&lt;button&gt;</code>
              </li>
              <li>
                <code className="example">&lt;select&gt;</code>{" "}
                <code className="example">&lt;optgroup&gt;</code>{" "}
                <code className="example">&lt;option&gt;</code>
              </li>
              <li>
                <code className="example">&lt;textarea&gt;</code>
              </li>
              <li>
                <code className="example">&lt;datalist&gt;</code>
              </li>
              <li>
                <code className="example">&lt;output&gt;</code>
              </li>
              <ReferenceButton>
                <li>
                  <code className="example">&lt;table&gt;</code>{" "}
                  <ul>
                    <li>
                      <code className="example">&lt;caption&gt;</code>
                      <br />
                      Must be the first child of its parent{" "}
                      <code className="example">&lt;table&gt;</code> element.
                    </li>
                    <li>
                      <code className="example">&lt;colgroup&gt;</code>
                      <br />
                      Column Group
                      <br />
                      The <code className="example">span</code> attribute can be
                      used when the{" "}
                      <code className="example">&lt;colgroup&gt;</code> has no{" "}
                      <code className="example">&lt;col&gt;</code> elements.
                    </li>
                    <li>
                      <code className="example">&lt;col&gt;</code>
                      <br />
                      Column
                      <br />
                      The <code className="example">span</code> attribute can be
                      used when its parent{" "}
                      <code className="example">&lt;colgroup&gt;</code> element
                      does not have the <code className="example">span</code>{" "}
                      attribute.
                    </li>
                    <li>
                      <code className="example">&lt;thead&gt;</code>
                      <br />
                      Table Head
                    </li>
                    <li>
                      <code className="example">&lt;tbody&gt;</code>
                      <br />
                      Table Body
                    </li>
                    <li>
                      <code className="example">&lt;tfoot&gt;</code>
                      <br />
                      Table Foot
                    </li>
                    <ul>
                      <li>
                        <code className="example">&lt;tr&gt;</code>
                        <br />
                        Table Row
                      </li>
                      <ul>
                        <li>
                          <code className="example">&lt;th&gt;</code>
                          <br />
                          Table Header
                          <br />
                          Attributes: <code className="example">
                            scope
                          </code>{" "}
                          <code className="example">headers</code>{" "}
                          <code className="example">rowspan</code>{" "}
                          <code className="example">colspan</code>{" "}
                          <code className="example">aria-sort</code>
                        </li>
                        <li>
                          <code className="example">&lt;td&gt;</code>
                          <br />
                          Table Data
                          <br />
                          Attributes: <code className="example">
                            headers
                          </code>{" "}
                          <code className="example">rowspan</code>{" "}
                          <code className="example">colspan</code>
                        </li>
                      </ul>
                    </ul>
                  </ul>
                </li>
              </ReferenceButton>
              <li>
                <code className="example">&lt;hgroup&gt;</code>
              </li>
              <li>
                <code className="example">&lt;h1&gt;</code>~
                <code className="example">&lt;h6&gt;</code>
              </li>
              <li>
                <code className="example">&lt;p&gt;</code>
              </li>
              <li>
                <code className="example">&lt;b&gt;</code>{" "}
                <code className="example">&lt;strong&gt;</code>{" "}
                <code className="example">&lt;i&gt;</code>{" "}
                <code className="example">&lt;em&gt;</code>{" "}
                <code className="example">&lt;s&gt;</code>{" "}
                <code className="example">&lt;em&gt;</code>{" "}
                <code className="example">&lt;mark&gt;</code>{" "}
                <code className="example">&lt;small&gt;</code>{" "}
                <code className="example">&lt;del&gt;</code>{" "}
                <code className="example">&lt;ins&gt;</code>{" "}
                <code className="example">&lt;sub&gt;</code>{" "}
                <code className="example">&lt;sup&gt;</code>{" "}
                <code className="example">&lt;kbd&gt;</code>{" "}
                <code className="example">&lt;samp&gt;</code>{" "}
                <code className="example">&lt;var&gt;</code>
              </li>
              <li>
                <code className="example">&lt;pre&gt;</code>{" "}
                <code className="example">&lt;code&gt;</code>{" "}
              </li>
              <li>
                <code className="example">&lt;bdo&gt;</code>
              </li>
              <li>
                <code className="example">&lt;hr&gt;</code>{" "}
                <code className="example">&lt;br&gt;</code>
              </li>
              <li>
                <code className="example">&lt;ul&gt;</code>{" "}
                <code className="example">&lt;ol&gt;</code>{" "}
                <code className="example">&lt;li&gt;</code>
              </li>
              <li>
                <code className="example">&lt;dl&gt;</code>{" "}
                <code className="example">&lt;dt&gt;</code>{" "}
                <code className="example">&lt;dd&gt;</code>
              </li>
              <li>
                <code className="example">&lt;details&gt;</code>{" "}
                <code className="example">&lt;summary&gt;</code>
              </li>
              <ReferenceButton>
                <li id="<a>">
                  <code className="example">&lt;a&gt;</code>
                </li>
              </ReferenceButton>
              <li>
                <code className="example">&lt;figure&gt;</code>{" "}
                <code className="example">&lt;figcaption&gt;</code>
              </li>
              <li>
                <code className="example">&lt;img&gt;</code>{" "}
                <code className="example">&lt;map&gt;</code>{" "}
                <code className="example">&lt;area&gt;</code>
              </li>
              <li>
                <code className="example">&lt;picture&gt;</code>{" "}
                <code className="example">&lt;source&gt;</code>
              </li>
              <li>
                <code className="example">&lt;video&gt;</code>{" "}
                <code className="example">&lt;source&gt;</code>
              </li>
              <li>
                <code className="example">&lt;audio&gt;</code>{" "}
                <code className="example">&lt;source&gt;</code>
              </li>
              <li>
                <code className="example">&lt;iframe&gt;</code>
              </li>
            </ul>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav headings={headings} />
      </aside>
    </main>
  );
}
