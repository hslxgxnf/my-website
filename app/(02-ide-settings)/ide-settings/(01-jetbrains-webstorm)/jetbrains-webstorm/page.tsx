import type { Metadata } from "next";

import { reference, liveTemplateTextEdf, liveTemplateTextUc } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import SRHelper from "@/components/main-description/SRHelper";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "JetBrains WebStorm",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <Heading type="link-id" number={1} lastUpdated="2026-09-21">
            JetBrains WebStorm
          </Heading>
          <p>
            Settings prefixed with <SRHelper type="project-specificity" /> are
            only applied to the current project. They have to be set again for
            other projects.
          </p>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Appearance & Behavior
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
                <td>Appearance</td>
                <td>
                  Tree Views
                  <br />
                  <SRHelper type="subcategory" /> Show indent guides
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>System Settings</td>
                <td>Confirm before exiting the IDE</td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
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
                  <SRHelper type="subcategory" /> Reopen projects on startup
                </td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
              <tr>
                <td>System Settings</td>
                <td>
                  Project
                  <br />
                  <SRHelper type="subcategory" /> Open project in
                </td>
                <td>New window</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Keymap
            </Heading>
          </RefButton>
          <table>
            <caption>Visual Studio 2022</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col" aria-sort="ascending">
                  Shortcut <SRHelper type="ascending-sort" />
                </th>
                <th scope="col">Custom</th>
              </tr>
            </thead>
            <tbody>
              {/*Alt*/}
              <tr>
                <td>Create Rectangular Selection on Mouse Drag</td>
                <td>
                  <Highlight type="keyboard">Alt + Click</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Move Line Down</td>
                <td>
                  <Highlight type="keyboard">Alt + Down</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Show Context Actions</td>
                <td>
                  <Highlight type="keyboard">Alt + Enter</Highlight>,{" "}
                  <Highlight type="keyboard">Ctrl + .</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Surround With...</td>
                <td>
                  <Highlight type="keyboard">Alt + T</Highlight>
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Move Line Up</td>
                <td>
                  <Highlight type="keyboard">Alt + Up</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              {/*Ctrl*/}
              <tr>
                <td>Add or Remove Caret</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Alt + Click</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Clone Caret Below</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Alt + Down</Highlight>
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Settings</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Alt + S</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Clone Caret Above</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Alt + Up</Highlight>
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Go to Declaration or Usages</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Click</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Duplicate Line or Selection</td>
                <td>
                  <Highlight type="keyboard">Ctrl + D</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Select Last Row</td>
                <td>
                  <Highlight type="keyboard">Ctrl + End</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Find</td>
                <td>
                  <Highlight type="keyboard">Ctrl + F</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Run</td>
                <td>
                  <Highlight type="keyboard">Ctrl + F5</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Replace</td>
                <td>
                  <Highlight type="keyboard">Ctrl + H</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Select First Row</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Home</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Comment with Line Comment</td>
                <td>
                  <Highlight type="keyboard">Ctrl + K * C</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Reformat Code</td>
                <td>
                  <Highlight type="keyboard">Ctrl + K * D</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Rename</td>
                <td>
                  <Highlight type="keyboard">Ctrl + R * R</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Find in Files</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Shift + F</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Replace in Files</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Shift + H</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Parameter Info</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Shift + Space</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Reopen Closed Tab</td>
                <td>
                  <Highlight type="keyboard">Ctrl + Shift + T</Highlight>
                </td>
                <td>
                  <SRHelper type="checked" />, Remove{" "}
                  <Highlight type="text">Go to File...</Highlight>
                </td>
              </tr>
              <tr>
                <td>
                  Code Completion
                  <br />
                  <SRHelper type="subcategory" /> Basic
                </td>
                <td>
                  <Highlight type="keyboard">Ctrl + Space</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Close Tab</td>
                <td>
                  <Highlight type="keyboard">Ctrl + W</Highlight>
                </td>
                <td>
                  <SRHelper type="checked" />, Remove{" "}
                  <Highlight type="text">Extend Selection</Highlight>
                </td>
              </tr>
              {/*F*/}
              <tr>
                <td>Toggle Line Breakpoint</td>
                <td>
                  <Highlight type="keyboard">F9</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Step Over</td>
                <td>
                  <Highlight type="keyboard">F10</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>Step Into</td>
                <td>
                  <Highlight type="keyboard">F11</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              {/*Shift*/}
              <tr>
                <td>Search Everywhere</td>
                <td>
                  <Highlight type="keyboard">Shift + Shift</Highlight>,{" "}
                  <Highlight type="keyboard">Ctrl + T</Highlight>
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
            </tbody>
          </table>
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
                <td>General</td>
                <td>
                  Soft Wraps
                  <br />
                  <SRHelper type="subcategory" /> Soft-wrap these files: *.md;
                  *.txt; *.rst; *.adoc
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  <SRHelper type="subcategory" /> Appearance
                </td>
                <td>Show method separators</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  <SRHelper type="subcategory" /> Appearance
                </td>
                <td>Show CSS color preview as background</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  General
                  <br />
                  <SRHelper type="subcategory" /> Code Completion
                  <br />
                  <SRHelper type="subcategory" />
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
                <td>Live Templates</td>
                <td>
                  JavaScript <SRHelper type="next" /> + <SRHelper type="next" />{" "}
                  <Highlight type="underline">1</Highlight> Live Template
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
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
                <td>
                  <SRHelper type="empty" />
                </td>
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
                <td>
                  <SRHelper type="empty" />
                </td>
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
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Edit Variables...
                  <br />
                  <SRHelper type="subcategory" /> Expression
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    complete()
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Define <SRHelper type="option-toggle" />
                  <br />
                  <SRHelper type="subcategory" /> Everywhere
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> Top level statement
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> TypeScript
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> Top level statement
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Options
                  <br />
                  <SRHelper type="subcategory" /> Reformat according to style
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Live Templates</td>
                <td>
                  React <SRHelper type="next" /> + <SRHelper type="next" />{" "}
                  <Highlight type="underline">1</Highlight> Live Template
                </td>
                <td>
                  <SRHelper type="empty" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
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
                <td>
                  <SRHelper type="empty" />
                </td>
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
                <td>
                  <SRHelper type="empty" />
                </td>
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
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Define <SRHelper type="option-toggle" />
                  <br />
                  <SRHelper type="subcategory" /> Everywhere
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> Top level statement
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> TypeScript
                  <br />
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" />{" "}
                  <SRHelper type="subcategory" /> Top level statement
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="empty" />
                </td>
                <td>
                  Options
                  <br />
                  <SRHelper type="subcategory" /> Reformat according to style
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
              <tr>
                <td>Inlay Hints</td>
                <td>Method chains</td>
                <td>
                  <SRHelper type="unchecked" />
                </td>
              </tr>
              <tr>
                <td>
                  Emmet
                  <br />
                  <SRHelper type="subcategory" /> HTML
                </td>
                <td>Enable abbreviation preview</td>
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
              Plugins
            </Heading>
          </RefButton>
          <ul>
            <li>
              <p>Marketplace</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="text" copy={true}>
                      Visual Studio 2022 Keymap
                    </Highlight>
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="text" copy={true}>
                      Rainbow Brackets
                    </Highlight>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <SRHelper type="settings" />
              </p>
              <ul>
                <li>
                  <p>Update Plugins Automatically</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Languages & Frameworks
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
                  <SRHelper type="project-specificity" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" /> Code Quality Tools
                  <br />
                  <SRHelper type="subcategory" /> ESLint
                </td>
                <td>Automatic ESLint configuration</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" /> Prettier
                </td>
                <td>Automatic Prettier configuration</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" /> Prettier
                </td>
                <td>
                  Run for <Highlight type="underline">f</Highlight>iles:
                </td>
                <td>
                  <Highlight type="text" copy={true}>
                    {
                      "**/*.{html,css,scss,js,ts,cjs,cts,mjs,mts,jsx,tsx,vue,astro,json,md}"
                    }
                  </Highlight>
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" /> Prettier
                </td>
                <td>Run on save</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" /> Prettier
                </td>
                <td>Run on paste</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> JavaScript
                  <br />
                  <SRHelper type="subcategory" /> Prettier
                </td>
                <td>Prefer Prettier configuration to IDE code style</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> JavaScript Runtime
                </td>
                <td>
                  Node.js
                  <br />
                  <SRHelper type="subcategory" /> Coding assistance for Node.js
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> Style Sheets
                  <br />
                  <SRHelper type="subcategory" /> Stylelint
                </td>
                <td>Enable</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> Style Sheets
                  <br />
                  <SRHelper type="subcategory" /> Stylelint
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
                  <SRHelper type="project-specificity" /> Style Sheets
                  <br />
                  <SRHelper type="subcategory" /> Stylelint
                </td>
                <td>Run stylelint --fix on save</td>
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
                <td>Run stylelint --fix</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>
                  <SRHelper type="project-specificity" /> Actions on Save
                </td>
                <td>Run Prettier</td>
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
                <td>Enable backup and sync:</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
            </tbody>
          </table>
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
            </tbody>
          </table>
        </section>
        <section>
          <RefButton>
            <Heading type="link-id" number={2}>
              Rainbow Brackets
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
                <td>Color</td>
                <td>
                  Color
                  <br />
                  <SRHelper type="subcategory" /> Cycle count on all brackets
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Indent guidelines Highlighting</td>
                <td>
                  Indent guidelines Highlighting
                  <br />
                  <SRHelper type="subcategory" /> Focus mode
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Language Specific</td>
                <td>
                  Language Specific
                  <br />
                  <SRHelper type="subcategory" /> Rainbowify tag name in
                  XML/HTML/template files
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Language Specific</td>
                <td>
                  Language Specific
                  <br />
                  <SRHelper type="subcategory" /> Rainbowify Python keywords
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Rainbow Variables</td>
                <td>Enable Rainbow Variables(restart required)</td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Scope Highlighting</td>
                <td>
                  Scope Highlighting
                  <br />
                  <SRHelper type="subcategory" /> Border
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
              <tr>
                <td>Scope Highlighting</td>
                <td>
                  Scope Highlighting
                  <br />
                  <SRHelper type="subcategory" /> Suppress scope highlighting
                  when diffing
                </td>
                <td>
                  <SRHelper type="checked" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
      <PageNav />
    </main>
  );
}
