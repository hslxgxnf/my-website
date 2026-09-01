import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "npm-check-updates",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-06-13">
            npm-check-updates
          </HeadingLinkId>
        </RefButton>
        <p>
          <Highlight type="text">npm-check-updates</Highlight> manages the
          versions of installed packages in{" "}
          <Highlight type="text">package.json</Highlight>.
        </p>
        <ul>
          <li>
            <p>
              <Highlight type="simple-code" copy={true}>
                npm i -g npm-check-updates
              </Highlight>
            </p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">ncu</Highlight>
            </p>
            <p>
              Checks for the latest versions of installed packages in{" "}
              <Highlight type="text">dependencies</Highlight>,{" "}
              <Highlight type="text">devDependencies</Highlight>,{" "}
              <Highlight type="text">peerDependencies</Highlight>,{" "}
              <Highlight type="text">optionalDependencies</Highlight>, and{" "}
              <Highlight type="text">packageManager</Highlight>.
            </p>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">ncu --upgrade (-u)</Highlight>
                </p>
                <p>
                  Only upgrades the versions in{" "}
                  <Highlight type="text">package.json</Highlight> to the latest
                  versions. It does not upgrade{" "}
                  <Highlight type="text">package-lock.json</Highlight> or{" "}
                  <Highlight type="text">node_modules</Highlight>. To upgrade
                  them, run <Highlight type="simple-code">npm i</Highlight>.
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    ncu --interactive (-i)
                  </Highlight>
                </p>
                <p>
                  Runs in interactive mode to choose which packages to upgrade.
                </p>
              </li>
              <li>
                <p>Options</p>
                <ul>
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
              </li>
            </ul>
          </li>
        </ul>
      </article>

      <PageNav />
    </main>
  );
}
