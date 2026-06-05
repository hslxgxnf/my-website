import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "npm-check-updates",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <ReferenceButton>
          <HeadingLinkId headingNumber={1} publishedAt="2026-06-05">
            npm-check-updates
          </HeadingLinkId>
        </ReferenceButton>
        <p>
          <Highlight type="text">npm-check-updates</Highlight> manages versions
          of installed packages in the{" "}
          <Highlight type="text">package.json</Highlight> file.
        </p>
        <ul>
          <li>
            <Highlight type="simple-code" copy={true}>
              npm i -g npm-check-updates
            </Highlight>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">ncu</Highlight>
            </p>
            <p>
              Checks for the latest versions of installed packages in the
              following sections:{" "}
              <Highlight type="text">dependencies</Highlight>,{" "}
              <Highlight type="text">devDependencies</Highlight>,{" "}
              <Highlight type="text">peerDependencies</Highlight>,{" "}
              <Highlight type="text">optionalDependencies</Highlight>, and{" "}
              <Highlight type="text">packageManager</Highlight>.
            </p>
          </li>
          <ul>
            <li>
              <p>
                <Highlight type="simple-code">ncu --upgrade (-u)</Highlight>
              </p>
              <p>
                Only upgrades versions in the{" "}
                <Highlight type="text">package.json</Highlight> file to the
                latest versions. This doesn't upgrade the{" "}
                <Highlight type="text">package-lock.json</Highlight> file and{" "}
                <Highlight type="text">node_modules</Highlight> folder. To
                upgrade them, <Highlight type="simple-code">npm i</Highlight>.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">ncu --interactive (-i)</Highlight>
              </p>
              <p>
                Enables the interactive mode to choose which packages to
                upgrade.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  --target (-t) &lt;version-name&gt;
                </Highlight>
              </p>
              <p>Scopes packages to the specified version.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  --dep &lt;section-names&gt;
                </Highlight>
              </p>
              <p>Scopes packages to the specified dependency sections.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">--global (-g)</Highlight>
              </p>
              <p>Scopes global packages.</p>
            </li>
          </ul>
        </ul>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
