import type { Metadata } from "next";
import { FaSortAlphaDown } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

import styles from "@/styles/detail-page/page.module.css";
import { headings } from "@/app/ide-settings/jetbrains-webstorm/data";
import HeadingLinkId from "@/components/detail-page/HeadingLinkId";
import HighlightText from "@/components/detail-page/HighlightText";
import PageNav from "@/components/detail-page/PageNav";

export const metadata: Metadata = {
  title: "JetBrains WebStorm",
};

const entities = {
  checkedBox: "☑", // "\u2611"
  emptyBox: "☐", // "\u2610"
  rightSubArrow: "↪", // "\u21AA"
  rightStraightArrow: "➜", // "\u279C"
};

const liveTemplateTextEdf = `export default function $NAME$() {
  $END$
}`;

const liveTemplateTextUc = `"use client";
$END$`;

export default function Page() {
  return (
    <main className={styles.main}>
      <aside></aside>

      <article>
        <section>
          <HeadingLinkId headingNumber={1}>JetBrains WebStorm</HeadingLinkId>
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
                <td>
                  Code Style
                  <br />
                  {entities.rightSubArrow} Style Sheets
                  <br />
                  {entities.rightSubArrow} CSS
                </td>
                <td>
                  Arrangement
                  <br />
                  {entities.rightSubArrow} Sort CSS properties
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  Code Style
                  <br />
                  {entities.rightSubArrow} Style Sheets
                  <br />
                  {entities.rightSubArrow} CSS
                </td>
                <td>
                  Arrangement
                  <br />
                  {entities.rightSubArrow} Custom order:
                </td>
                <td>
                  {entities.checkedBox}, !!!Need a link for CSS Property
                  Arrangement!!!
                </td>
              </tr>
              <tr>
                <td>Live Templates</td>
                <td>
                  JavaScript {entities.rightStraightArrow} +{" "}
                  {entities.rightStraightArrow}{" "}
                  <HighlightText underline={true}>1</HighlightText> Live
                  Template
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  A<HighlightText underline={true}>b</HighlightText>breviation:
                </td>
                <td>
                  <HighlightText copy={true}>edf</HighlightText>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <HighlightText underline={true}>D</HighlightText>escription:
                </td>
                <td>
                  <HighlightText copy={true}>
                    export default function
                  </HighlightText>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <HighlightText underline={true}>T</HighlightText>emplate text:
                </td>
                <td>
                  <HighlightText pre={true} copy={true}>
                    {liveTemplateTextEdf}
                  </HighlightText>
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
                  <HighlightText copy={true}>complete()</HighlightText>
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
                  <HighlightText underline={true}>1</HighlightText> Live
                  Template
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  A<HighlightText underline={true}>b</HighlightText>breviation:
                </td>
                <td>
                  <HighlightText copy={true}>uc</HighlightText>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <HighlightText underline={true}>D</HighlightText>escription:
                </td>
                <td>
                  <HighlightText copy={true}>"use client";</HighlightText>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <HighlightText underline={true}>T</HighlightText>emplate text:
                </td>
                <td>
                  <HighlightText pre={true} copy={true}>
                    {liveTemplateTextUc}
                  </HighlightText>
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
              <HighlightText copy={true}>Rainbow Brackets</HighlightText>
            </li>
            <li>
              <IoSettingsOutline /> {entities.rightStraightArrow} Update Plugins
              Automatically
            </li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>
            Languages & Frameworks
          </HeadingLinkId>
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
                  JavaScript
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
                  JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Automatic Prettier configuration</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>
                  Run for <HighlightText underline={true}>f</HighlightText>iles:
                </td>
                <td>
                  <HighlightText copy={true}>
                    {
                      "**/*.{md,html,css,js,ts,jsx,tsx,cjs,cts,mjs,mts,json,vue,astro}"
                    }
                  </HighlightText>
                </td>
              </tr>
              <tr>
                <td>
                  JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Run on save</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Run on paste</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>
                  JavaScript
                  <br />
                  {entities.rightSubArrow} Prettier
                </td>
                <td>Prefer Prettier configuration to IDE code style</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>JavaScript Runtime</td>
                <td>
                  Node.js
                  <br />
                  Coding assistance for Node.js
                </td>
                <td>{entities.checkedBox}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Tools</HeadingLinkId>
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
                <td>Actions on Save</td>
                <td>Reformat code</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Actions on Save</td>
                <td>Rearrange code</td>
                <td>{entities.checkedBox}</td>
              </tr>
              <tr>
                <td>Actions on Save</td>
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
        <PageNav headings={headings} />
      </aside>
    </main>
  );
}
