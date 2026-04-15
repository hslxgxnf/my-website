import type { Metadata } from "next";

import styles from "@/styles/non-root/shared-page/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/non-root/shared-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/non-root/shared-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/non-root/detail-page/HeadingLinkId";
import Highlight from "@/components/non-root/detail-page/Highlight/Highlight";
import ToggleList from "@/components/non-root/detail-page/ToggleList";
import PageNav from "@/components/non-root/detail-page/PageNav";

export const metadata: Metadata = {
  title: "Elements",
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
            <HeadingLinkId headingNumber={1}>Elements</HeadingLinkId>
          </ReferenceButton>
          <p>
            Tags are case-insensitive, but it is recommended to use lowercase.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Normal Elements</HeadingLinkId>
          <p>
            <Highlight type="simple-code">
              &lt;Opening Tag&gt;Nested Content&lt;/Closing Tag&gt;
            </Highlight>
          </p>
          <p>Normal elements can have nested elements and text nodes.</p>
          <p>
            The <Highlight type="simple-code">Nested Content</Highlight> sets
            the default value.
            <br />
            <Highlight type="simple-code">
              &lt;textarea&gt;Default&lt;/textarea&gt;
            </Highlight>
          </p>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Void Elements</HeadingLinkId>
          </ReferenceButton>

          <p>
            <Highlight type="simple-code">&lt;Tag /&gt;</Highlight>
          </p>
          <p>
            The trailing slash is not required, but it makes XHTML-compatible
            and more readable.
          </p>
          <p>Void elements cannot have nested elements and text nodes.</p>
          <p>
            The <Highlight type="simple-code">value</Highlight> attribute sets
            the default value.
            <br />
            <Highlight type="simple-code">
              &lt;input value="Default" /&gt;
            </Highlight>
          </p>
          <ul>
            <li>
              <Highlight type="simple-code">&lt;meta&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;link&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;img&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;input&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;hr&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;br&gt;</Highlight>
            </li>
          </ul>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Content Categories</HeadingLinkId>
          </ReferenceButton>
          <ul>
            <li>
              <Highlight type="simple-code">&lt;!doctype html&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;html&gt;</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">&lt;head&gt;</Highlight>
            </li>
            <ul>
              <li>
                <Highlight type="simple-code">&lt;meta&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;title&gt;</Highlight>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;link&gt;</Highlight>
                </p>
                <p>External CSS, Favicon</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;style&gt;</Highlight>
                </p>
                <p>Internal CSS</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;script&gt;</Highlight>{" "}
                  <Highlight type="simple-code">&lt;noscript&gt;</Highlight>
                </p>
                <p>
                  Can be nested in the{" "}
                  <Highlight type="simple-code">&lt;body&gt;</Highlight>{" "}
                  element.
                </p>
              </li>
            </ul>
            <li>
              <Highlight type="simple-code">&lt;body&gt;</Highlight>
            </li>
            <ul>
              <li>
                <Highlight type="simple-code">&lt;header&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;main&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;footer&gt;</Highlight>
              </li>
              <hr />
              <li>
                <Highlight type="simple-code">&lt;aside&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;nav&gt;</Highlight>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;article&gt;</Highlight>
                </p>
                <p>Independent Content</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;section&gt;</Highlight>
                </p>
                <p>Semantic Block Grouping</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;div&gt;</Highlight>
                </p>
                <p>Non-Semantic Block Grouping</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;span&gt;</Highlight>
                </p>
                <p>Non-Semantic Inline Grouping</p>
              </li>
              <hr />
              <ReferenceButton>
                <ToggleList
                  header={
                    <Highlight type="simple-code">&lt;dialog&gt;</Highlight>
                  }
                >
                  <p>Creates a modal or non-modal dialog.</p>
                  <p>
                    The <Highlight type="simple-code">closedby</Highlight>{" "}
                    attribute controls how a dialog can be dismissed.
                    <br />
                    The <Highlight type="simple-code">
                      closedby="any"
                    </Highlight>{" "}
                    attribute closes a dialog by a light dismiss user action
                    (e.g., clicking the backdrop), a platform-specific user
                    action (e.g., pressing the ESC key), or a
                    developer-specified mechanism.
                    <br />
                    The{" "}
                    <Highlight type="simple-code">
                      closedby="closerequest"
                    </Highlight>{" "}
                    attribute closes a dialog by a platform-specific user action
                    or a developer-specified mechanism. This option is the
                    default for modal dialogs.
                    <br />
                    The{" "}
                    <Highlight type="simple-code">
                      closedby="none"
                    </Highlight>{" "}
                    attribute closes a dialog by a developer-specified
                    mechanism. This option is the default for non-modal dialogs.
                    <br />
                  </p>
                  <p>
                    The <Highlight type="simple-code">open</Highlight> attribute
                    is a boolean attribute that determines whether a dialog is
                    currently displayed. Directly manipulating this attribute in
                    <Highlight type="text">HTML</Highlight> is not recommended.
                    Instead, use <Highlight type="text">JavaScript</Highlight>{" "}
                    methods{" "}
                    <Highlight type="simple-code">
                      HTMLDialogElement.show()
                    </Highlight>
                    ,{" "}
                    <Highlight type="simple-code">
                      HTMLDialogElement.showModal()
                    </Highlight>
                    , and{" "}
                    <Highlight type="simple-code">
                      HTMLDialogElement.close()
                    </Highlight>{" "}
                    for better control.
                  </p>
                </ToggleList>
              </ReferenceButton>
              <ReferenceButton>
                <ToggleList
                  header={
                    <Highlight type="simple-code">&lt;form&gt;</Highlight>
                  }
                >
                  <p>
                    The <Highlight type="simple-code">action</Highlight>{" "}
                    attribute defines a URL to which form data will be
                    submitted. After submission, the current URL will be updated
                    to the defined URL.
                  </p>
                  <p>
                    The <Highlight type="simple-code">method="get"</Highlight>{" "}
                    sends form data as a query string after the existing URL.
                  </p>
                </ToggleList>
              </ReferenceButton>
              <li>
                <Highlight type="simple-code">&lt;fieldset&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;legend&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;label&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;input&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;button&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;datalist&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;select&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;optgroup&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;option&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;textarea&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;output&gt;</Highlight>
              </li>
              <ReferenceButton>
                <ToggleList
                  header={
                    <Highlight type="simple-code">&lt;table&gt;</Highlight>
                  }
                >
                  <ul>
                    <li>
                      <Highlight type="simple-code">&lt;caption&gt;</Highlight>
                      <br />
                      Must be the first child of its parent{" "}
                      <Highlight type="simple-code">
                        &lt;table&gt;
                      </Highlight>{" "}
                      element.
                    </li>
                    <li>
                      <Highlight type="simple-code">&lt;colgroup&gt;</Highlight>
                      <br />
                      Column Group
                      <br />
                      The <Highlight type="simple-code">span</Highlight>{" "}
                      attribute can be used when the{" "}
                      <Highlight type="simple-code">&lt;colgroup&gt;</Highlight>{" "}
                      has no{" "}
                      <Highlight type="simple-code">&lt;col&gt;</Highlight>{" "}
                      elements.
                    </li>
                    <li>
                      <Highlight type="simple-code">&lt;col&gt;</Highlight>
                      <br />
                      Column
                      <br />
                      The <Highlight type="simple-code">span</Highlight>{" "}
                      attribute can be used when its parent{" "}
                      <Highlight type="simple-code">&lt;colgroup&gt;</Highlight>{" "}
                      element does not have the{" "}
                      <Highlight type="simple-code">span</Highlight> attribute.
                    </li>
                    <li>
                      <Highlight type="simple-code">&lt;thead&gt;</Highlight>
                      <br />
                      Table Head
                    </li>
                    <li>
                      <Highlight type="simple-code">&lt;tbody&gt;</Highlight>
                      <br />
                      Table Body
                    </li>
                    <li>
                      <Highlight type="simple-code">&lt;tfoot&gt;</Highlight>
                      <br />
                      Table Foot
                    </li>
                    <ul>
                      <li>
                        <Highlight type="simple-code">&lt;tr&gt;</Highlight>
                        <br />
                        Table Row
                      </li>
                      <ul>
                        <li>
                          <Highlight type="simple-code">&lt;th&gt;</Highlight>
                          <br />
                          Table Header
                          <br />
                          Attributes:{" "}
                          <Highlight type="simple-code">scope</Highlight>{" "}
                          <Highlight type="simple-code">headers</Highlight>{" "}
                          <Highlight type="simple-code">rowspan</Highlight>{" "}
                          <Highlight type="simple-code">colspan</Highlight>{" "}
                          <Highlight type="simple-code">aria-sort</Highlight>
                        </li>
                        <li>
                          <Highlight type="simple-code">&lt;td&gt;</Highlight>
                          <br />
                          Table Data
                          <br />
                          Attributes:{" "}
                          <Highlight type="simple-code">headers</Highlight>{" "}
                          <Highlight type="simple-code">rowspan</Highlight>{" "}
                          <Highlight type="simple-code">colspan</Highlight>
                        </li>
                      </ul>
                    </ul>
                  </ul>
                </ToggleList>
              </ReferenceButton>
              <li>
                <Highlight type="simple-code">&lt;hgroup&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;h1&gt;</Highlight>~
                <Highlight type="simple-code">&lt;h6&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;p&gt;</Highlight>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;strong&gt;</Highlight>{" "}
                  <Highlight type="simple-code">&lt;b&gt;</Highlight>
                </p>
                <p>Bold</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;em&gt;</Highlight>{" "}
                  <Highlight type="simple-code">&lt;i&gt;</Highlight>
                </p>
                <p>Italic</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;s&gt;</Highlight>
                </p>
                <p>Strikethrough</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;mark&gt;</Highlight>
                </p>
                <p>Highlight</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;del&gt;</Highlight>{" "}
                  <Highlight type="simple-code">&lt;ins&gt;</Highlight>
                </p>
                <p>Delete and Insert</p>
              </li>
              <li>
                <Highlight type="simple-code">&lt;small&gt;</Highlight>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;var&gt;</Highlight>{" "}
                  <Highlight type="simple-code">&lt;sub&gt;</Highlight>{" "}
                  <Highlight type="simple-code">&lt;sup&gt;</Highlight>
                </p>
                <p>Variable</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;kbd&gt;</Highlight>
                </p>
                <p>Keyboard</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">&lt;samp&gt;</Highlight>
                </p>
                <p>Program Sample Output</p>
              </li>
              <li>
                <Highlight type="simple-code">&lt;pre&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;code&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;bdo&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;bdi&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;hr&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;br&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;ul&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;ol&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;li&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;dl&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;dt&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;dd&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;details&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;summary&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;data&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;time&gt;</Highlight>
              </li>
              <ReferenceButton>
                <li>
                  <Highlight type="simple-code">&lt;a&gt;</Highlight>
                </li>
              </ReferenceButton>
              <li>
                <Highlight type="simple-code">&lt;figure&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;figcaption&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;img&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;map&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;area&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;picture&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;source&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;video&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;source&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;audio&gt;</Highlight>{" "}
                <Highlight type="simple-code">&lt;source&gt;</Highlight>
              </li>
              <li>
                <Highlight type="simple-code">&lt;iframe&gt;</Highlight>
              </li>
            </ul>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
