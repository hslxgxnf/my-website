import type { Metadata } from "next";
import { IoSettingsOutline } from "react-icons/io5";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference } from "./data";
import { entities } from "../../(01-jetbrains-webstorm)/jetbrains-webstorm/data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "JetBrains PyCharm",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-01">
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
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>
              Appearance & Behavior
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Keymap</HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Plugins</HeadingLinkId>
          <ul>
            <li>
              Marketplace
              <ul>
                <li>
                  <Highlight type="text" copy={true}>
                    Visual Studio 2022 Keymap
                  </Highlight>
                </li>
              </ul>
            </li>
            <li>
              <IoSettingsOutline />
              <ul>
                <li>Update Plugins Automatically</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Tools</HeadingLinkId>
          </ReferenceButton>
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
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>Backup and Sync</HeadingLinkId>
          </ReferenceButton>
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
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
