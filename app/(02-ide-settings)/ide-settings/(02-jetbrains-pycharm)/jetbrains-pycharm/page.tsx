import type { Metadata } from "next";

import { reference } from "./data";
import { entities } from "../../(01-jetbrains-webstorm)/jetbrains-webstorm/data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
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
            Settings prefixed with <strong>!</strong> are only applied to the
            current project. They have to be set again for other projects.
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
