import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import SRHelper from "@/components/main-description/SRHelper";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "JetBrains PyCharm",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <Heading type="link-id" number={1} lastUpdated="2026-07-22">
            JetBrains PyCharm
          </Heading>
          <p>
            Settings prefixed with <SRHelper type="project-specificity" /> are
            only applied to the current project. They have to be set again for
            other projects.
          </p>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Python
          </Heading>
          <table>
            <thead>
              <tr>
                <th scope="col">Left Section</th>
                <th scope="col">Right Section</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> Tools
                  <br />
                  <SRHelper type="subcategory" /> Black
                </td>
                <td>Use Black formatter: On save</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Appearance & Behavior
            </Heading>
          </RefButton>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Keymap
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Editor
          </Heading>
          <table>
            <thead>
              <tr>
                <th scope="col">Left Section</th>
                <th scope="col">Right Section</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  General
                  <br />
                  <SRHelper type="subcategory" /> Code Completion
                  <br />
                  <SRHelper type="subcategory" /> Popup
                </td>
                <td>Match case:</td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  <SRHelper type="subcategory" /> Editor Tabs
                </td>
                <td>
                  Appearance
                  <br />
                  <SRHelper type="subcategory" /> Tab placement:
                </td>
                <td>Left</td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  <SRHelper type="subcategory" /> Editor Tabs
                </td>
                <td>
                  Appearance
                  <br />
                  <SRHelper type="subcategory" /> Mark modified
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Inlay Hints</td>
                <td>Parameter names</td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
              <tr>
                <td>Inlay Hints</td>
                <td>Types</td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Plugins
            </Heading>
          </RefButton>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Tools
            </Heading>
          </RefButton>
          <table>
            <thead>
              <tr>
                <th scope="col">Left Section</th>
                <th scope="col">Right Section</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> Actions on Save
                </td>
                <td>Run Black</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> Terminal
                </td>
                <td>
                  Font Settings
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <Highlight type="underline">F</Highlight>ont:
                </td>
                <td>MesloLGM Nerd Font</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Backup and Sync
            </Heading>
          </RefButton>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            Advanced Settings
          </Heading>
          <table>
            <thead>
              <tr>
                <th scope="col">Left Section</th>
                <th scope="col">Right Section</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Run/Debug
                  <br />
                  <SRHelper type="subcategory" /> Confirm rerun with process
                  termination
                </td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Version Control
                  <br />
                  <SRHelper type="subcategory" /> Open Diff as Editor Tab
                </td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Welcome Screen
                  <br />
                  <SRHelper type="subcategory" /> Show the Welcome screen in
                  non-modal mode termination
                </td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Rainbow Brackets
            </Heading>
          </RefButton>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
