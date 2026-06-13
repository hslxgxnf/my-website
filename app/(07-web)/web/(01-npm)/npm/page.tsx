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
          <HeadingLinkId headingNumber={1} lastUpdated="2026-06-13">
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
              Initializes a project and creates{" "}
              <Highlight type="text">package.json</Highlight> through
              interactive prompts.
            </p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">npm init --yes (-y)</Highlight>
                </p>
                <p>
                  Initializes a project, skips interactive prompts, and creates{" "}
                  <Highlight type="text">package.json</Highlight> with default
                  values.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">npm install (i)</Highlight>
            </p>
            <p>
              Installs packages in{" "}
              <Highlight type="text">package.json</Highlight>.
            </p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm install (i) &lt;package-names&gt;
                  </Highlight>
                </p>
                <p>
                  Installs the specified packages into{" "}
                  <Highlight type="text">dependencies</Highlight>.
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    npm install (i) --save-dev (-D) &lt;package-names&gt;
                  </Highlight>
                </p>
                <p>
                  Installs the specified packages into{" "}
                  <Highlight type="text">devDependencies</Highlight>.
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
            <p>Lists installed packages.</p>
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
              Lists <Highlight type="text">scripts</Highlight>.
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
              Shows the absolute path to{" "}
              <Highlight type="text">node_modules</Highlight>.
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
