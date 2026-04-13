import type { Metadata } from "next";
import { FaSortAlphaDown } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

import styles from "@/styles/non-root/page.module.scss";
import {
  reference,
  entities,
  liveTemplateTextEdf,
  liveTemplateTextUc,
} from "./data";
import ReferenceNav from "@/components/detail-page/Reference/ReferenceNav";
import ReferenceButton from "@/components/detail-page/Reference/ReferenceButton/ReferenceButton";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import Highlight from "@/components/detail-page/Highlight/Highlight";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "JetBrains WebStorm",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <HeadingLinkId headingNumber={1}>JetBrains WebStorm</HeadingLinkId>
          <p>
            Settings prefixed with <strong>!</strong> are only applied to the
            current project. They have to be set again for other projects.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Appearance & Behavior</HeadingLinkId>
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
                <td>Appearance</td>
                <td>
                  Tree Views
                  <br />
                  {entities.rightSubArrow} Show indent guides
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>System Settings</td>
                <td>Confirm before exiting the IDE</td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td>System Settings</td>
                <td>When closing a tool window with a running process:</td>
                <td>Terminate process</td>
              </tr>
              <tr>
                <td>System Settings</td>
                <td>
                  Project
                  <br />
                  {entities.rightSubArrow} Reopen projects on startup
                </td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td>System Settings</td>
                <td>
                  Project
                  <br />
                  {entities.rightSubArrow} Open project in
                </td>
                <td>New window</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Keymap</HeadingLinkId>
          <table>
            <caption>Visual Studio</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">
                  Shortcut <FaSortAlphaDown />
                </th>
                <th scope="col">Custom</th>
              </tr>
            </thead>
            <tbody>
              {/*Alt*/}
              <tr>
                <td>Create Rectangular Selection on Mouse Drag</td>
                <td>Alt + Click</td>
                <td></td>
              </tr>
              <tr>
                <td>Move Line Down</td>
                <td>Alt + Down</td>
                <td>{entities.checkedBox}, Remove "Previous Method"</td>
              </tr>
              <tr>
                <td>Show Context Actions</td>
                <td>Alt + Enter, Ctrl + .</td>
                <td></td>
              </tr>
              <tr>
                <td>Move Line Up</td>
                <td>Alt + Up</td>
                <td>{entities.checkedBox}, Remove "Next Method"</td>
              </tr>
              {/*Ctrl*/}
              <tr>
                <td>Add or Remove Caret</td>
                <td>Ctrl + Alt + Click</td>
                <td></td>
              </tr>
              <tr>
                <td>Clone Caret Below</td>
                <td>Ctrl + Alt + Down</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Settings</td>
                <td>Ctrl + Alt + S</td>
                <td></td>
              </tr>
              <tr>
                <td>Clone Caret Above</td>
                <td>Ctrl + Alt + Up</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Go to Declaration or Usages</td>
                <td>Ctrl + Click</td>
                <td></td>
              </tr>
              <tr>
                <td>Duplicate Line or Selection</td>
                <td>Ctrl + D</td>
                <td></td>
              </tr>
              <tr>
                <td>Find</td>
                <td>Ctrl + F</td>
                <td></td>
              </tr>
              <tr>
                <td>Run</td>
                <td>Ctrl + F5</td>
                <td></td>
              </tr>
              <tr>
                <td>Replace</td>
                <td>Ctrl + H</td>
                <td></td>
              </tr>
              <tr>
                <td>Comment with Line Comment</td>
                <td>Ctrl + K {entities.rightStraightArrow} C</td>
                <td></td>
              </tr>
              <tr>
                <td>Reformat Code</td>
                <td>Ctrl + K {entities.rightStraightArrow} D</td>
                <td></td>
              </tr>
              <tr>
                <td>Rename</td>
                <td>Ctrl + R {entities.rightStraightArrow} R</td>
                <td></td>
              </tr>
              <tr>
                <td>Find in Files</td>
                <td>Ctrl + Shift + F</td>
                <td></td>
              </tr>
              <tr>
                <td>Replace in Files</td>
                <td>Ctrl + Shift + H</td>
                <td></td>
              </tr>
              <tr>
                <td>Parameter Info</td>
                <td>Ctrl + Shift + Space</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Code Completion
                  <br />
                  {entities.rightSubArrow} Basic
                </td>
                <td>Ctrl + Space</td>
                <td></td>
              </tr>
              <tr>
                <td>Close Tab</td>
                <td>Ctrl + W</td>
                <td>{entities.checkedBox}</td>
              </tr>
              {/*F*/}
              <tr>
                <td>Toggle Line Breakpoint</td>
                <td>F9</td>
                <td></td>
              </tr>
              <tr>
                <td>Step Over</td>
                <td>F10</td>
                <td></td>
              </tr>
              <tr>
                <td>Step Into</td>
                <td>F11</td>
                <td></td>
              </tr>
              {/*Shift*/}
              <tr>
                <td>Search Everywhere</td>
                <td>Shift + Shift, Ctrl + T</td>
                <td></td>
              </tr>
            </tbody>
          </table>
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
                <td>General</td>
                <td>
                  Soft Wraps
                  <br />
                  {entities.rightSubArrow} Soft-wrap these files: *.md; *.txt;
                  *.rst; *.adoc
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  {entities.rightSubArrow} Appearance
                </td>
                <td>Show method separators</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  {entities.rightSubArrow} Appearance
                </td>
                <td>Show CSS color preview as background</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  {entities.rightSubArrow} Code Completion
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
                <td>
                  Code Style
                  <br />
                  {entities.rightSubArrow} HTML
                </td>
                <td>Arrangement</td>
                <td>&minus; Remove rule(s)</td>
              </tr>
              <tr>
                <td>Live Templates</td>
                <td>
                  JavaScript {entities.rightStraightArrow} +{" "}
                  {entities.rightStraightArrow}{" "}
                  <Highlight type="underline">1</Highlight> Live Template
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  A<Highlight type="underline">b</Highlight>breviation:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    edf
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Highlight type="underline">D</Highlight>escription:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    export default function
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Highlight type="underline">T</Highlight>emplate text:
                </td>
                <td>
                  <Highlight type="text" copy={true} pre={true}>
                    {liveTemplateTextEdf}
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Edit Variables...
                  <br />
                  {entities.rightSubArrow} Expression
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    complete()
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Define <PiCaretDownBold />
                  <br />
                  Everywhere
                  <br />
                  {entities.rightSubArrow} JavaScript
                  <br />
                  {entities.rightSubArrow} Top level statement, Everywhere
                  <br />
                  {entities.rightSubArrow} TypeScript
                  <br />
                  {entities.rightSubArrow} Top level statement
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Options
                  <br />
                  {entities.rightSubArrow} Reformat according to style
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Live Templates</td>
                <td>
                  React {entities.rightStraightArrow} +{" "}
                  {entities.rightStraightArrow}{" "}
                  <Highlight type="underline">1</Highlight> Live Template
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  A<Highlight type="underline">b</Highlight>breviation:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    uc
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Highlight type="underline">D</Highlight>escription:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    "use client";
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Highlight type="underline">T</Highlight>emplate text:
                </td>
                <td>
                  <Highlight type="text" copy={true} pre={true}>
                    {liveTemplateTextUc}
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Define <PiCaretDownBold />
                  <br />
                  Everywhere
                  <br />
                  {entities.rightSubArrow} JavaScript
                  <br />
                  {entities.rightSubArrow} Top level statement, Everywhere
                  <br />
                  {entities.rightSubArrow} TypeScript
                  <br />
                  {entities.rightSubArrow} Top level statement
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Options
                  <br />
                  {entities.rightSubArrow} Reformat according to style
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Inlay Hints</td>
                <td>Parameter Names</td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td>Inlay Hints</td>
                <td>Types</td>
                <td>{entities.emptyBox}</td>
              </tr>
              <tr>
                <td>
                  Emmet
                  <br />
                  {entities.rightSubArrow} HTML
                </td>
                <td>Enable abbreviation preview</td>
                <td>{entities.checkedBox}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Plugins</HeadingLinkId>
          <ul>
            <li>
              Marketplace {entities.rightStraightArrow}{" "}
              <Highlight type="text" copy={true}>
                Rainbow Brackets
              </Highlight>
            </li>
            <li>
              <IoSettingsOutline /> {entities.rightStraightArrow} Update Plugins
              Automatically
            </li>
          </ul>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>
              Languages & Frameworks
            </HeadingLinkId>
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
                  <strong>!</strong> JavaScript
                  <br />
                  {entities.rightSubArrow} Code Quality Tools
                  <br />
                  {entities.rightSubArrow} ESLint
                </td>
                <td>Automatic ESLint configuration</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Automatic Prettier configuration</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>
                  Run for <Highlight type="underline">f</Highlight>iles:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    {
                      "**/*.{md,html,css,scss,js,ts,jsx,tsx,cjs,cts,mjs,mts,json,vue,astro}"
                    }
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Run on save</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Run on paste</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Prefer Prettier configuration to IDE code style</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> JavaScript Runtime
                </td>
                <td>
                  Node.js
                  <br />
                  {entities.rightSubArrow} Coding assistance for Node.js
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Style Sheets
                  <br />
                  {entities.rightSubArrow} Stylelint
                </td>
                <td>Enable</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Style Sheets
                  <br />
                  {entities.rightSubArrow} Stylelint
                </td>
                <td>
                  Run for <Highlight type="underline">f</Highlight>iles:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    {"**/*.{css,scss}"}
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Style Sheets
                  <br />
                  {entities.rightSubArrow} Stylelint
                </td>
                <td>Run stylelint --fix on save</td>
                <td>{entities.checkedBox}</td>
              </tr>
            </tbody>
          </table>
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
                <td>Reformat code</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Actions on Save
                </td>
                <td>Rearrange code</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Actions on Save
                </td>
                <td>Run stylelint --fix</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  <strong>!</strong> Actions on Save
                </td>
                <td>Run Prettier</td>
                <td>{entities.checkedBox}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Backup and Sync</HeadingLinkId>
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
                <td>Enable backup and sync:</td>
                <td>{entities.checkedBox}</td>
              </tr>
            </tbody>
          </table>
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
            </tbody>
          </table>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Rainbow Brackets</HeadingLinkId>
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
                <td>Color</td>
                <td>
                  Color
                  <br />
                  {entities.rightSubArrow} Cycle count on all brackets
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Language Specific</td>
                <td>
                  Language Specific
                  <br />
                  {entities.rightSubArrow} Rainbowify tag name in
                  XML/HTML/template files
                </td>
                <td>{entities.checkedBox}</td>
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
