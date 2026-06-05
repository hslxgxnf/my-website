import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "npm",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} publishedAt="2026-06-02">
            npm
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          <Highlight type="text">npm</Highlight> manages{" "}
          <Highlight type="text">Node.js</Highlight> packages.
        </p>
        <ul>
          <li>
            <p>
              <Highlight type="simple-code">npm init</Highlight>
            </p>
            <p>
              Initializes a project and creates a{" "}
              <Highlight type="text">package.json</Highlight> file through
              interactive prompts.
            </p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">npm init --yes (-y)</Highlight>
                </p>
                <p>
                  Skips the questionnaire and creates a{" "}
                  <Highlight type="text">package.json</Highlight> file with
                  default values.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">npm install (i)</Highlight>
            </p>
            <p>
              Installs packages listed in the{" "}
              <Highlight type="text">package.json</Highlight> file.
            </p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm install (i) &lt;package-names&gt;
                  </Highlight>
                </p>
                <p>
                  Installs the specified packages into the{" "}
                  <Highlight type="text">dependencies</Highlight> section.
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm install (i) --save-dev (-D) &lt;package-names&gt;
                  </Highlight>
                </p>
                <p>
                  Installs the specified packages into the{" "}
                  <Highlight type="text">devDependencies</Highlight> section.
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm install (i) --global (-g) &lt;package-names&gt;
                  </Highlight>
                </p>
                <p>Installs the specified packages globally.</p>
              </li>
            </ul>
          </li>

          <li>
            <p>
              <Highlight type="simple-code">npm list (ls)</Highlight>
            </p>
            <p>Lists all installed packages.</p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm list (ls) &lt;package-names&gt;
                  </Highlight>
                </p>
                <p>
                  Lists installed packages related to the specified packages.
                </p>{" "}
              </li>
            </ul>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">
                npm uninstall (un) &lt;package-names&gt;
              </Highlight>
            </p>
            <p>Uninstalls the specified packages.</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">npm run</Highlight>
            </p>
            <p>
              Lists the <Highlight type="text">scripts</Highlight> section.
            </p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm run &lt;script-name&gt;
                  </Highlight>
                </p>
                <p>Runs the specified script.</p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">npm root</Highlight>
            </p>
            <p>
              Shows the absolute path to the local{" "}
              <Highlight type="text">node_modules</Highlight> folder.
            </p>
          </li>
        </ul>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
