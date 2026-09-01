import type { Metadata } from "next";

import { reference } from "./data";
import { entities } from "../../(01-jetbrains-webstorm)/jetbrains-webstorm/data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "JetBrains PyCharm",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-22">
            JetBrains PyCharm
          </HeadingLinkId>
          <p>
            Settings prefixed with <strong>!</strong> are only applied to the
            current project. They have to be set again for other projects.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Python</HeadingLinkId>
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
                  <strong>!</strong> Tools
                  <br />
                  {entities.rightSubArrow} Black
                </td>
                <td>Use Black formatter: On save</td>
                <td>{entities.checkedBox}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>
              Appearance & Behavior
            </HeadingLinkId>
          </RefButton>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>Keymap</HeadingLinkId>
          </RefButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Editor</HeadingLinkId>
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
                  {entities.rightSubArrow} Code Completion
                  <br />
                  {entities.rightSubArrow} Popup
                </td>
                <td>Match case:</td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  {entities.rightSubArrow} Editor Tabs
                </td>
                <td>
                  Appearance
                  <br />
                  {entities.rightSubArrow} Tab placement:
                </td>
                <td>Left</td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  {entities.rightSubArrow} Editor Tabs
                </td>
                <td>
                  Appearance
                  <br />
                  {entities.rightSubArrow} Mark modified
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Inlay Hints</td>
                <td>Parameter names</td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td>Inlay Hints</td>
                <td>Types</td>
                <td>{entities.emptyBox}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>Plugins</HeadingLinkId>
          </RefButton>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>Tools</HeadingLinkId>
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
                  <strong>!</strong> Actions on Save
                </td>
                <td>Run Black</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Terminal
                </td>
                <td>
                  Font Settings
                  <br />
                  {entities.rightSubArrow}{" "}
                  <Highlight type="underline">F</Highlight>ont:
                </td>
                <td>MesloLGM Nerd Font</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>Backup and Sync</HeadingLinkId>
          </RefButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Advanced Settings</HeadingLinkId>
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
                <td></td>
                <td>
                  Run/Debug
                  <br />
                  {entities.rightSubArrow} Confirm rerun with process
                  termination
                </td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Version Control
                  <br />
                  {entities.rightSubArrow} Open Diff as Editor Tab
                </td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Welcome Screen
                  <br />
                  {entities.rightSubArrow} Show the Welcome screen in non-modal
                  mode termination
                </td>
                <td>{entities.emptyBox}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <HeadingLinkId headingNumber={2}>Rainbow Brackets</HeadingLinkId>
          </RefButton>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
