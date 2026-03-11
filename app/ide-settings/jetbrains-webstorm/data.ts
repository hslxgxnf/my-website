import type { Headings } from "@/types/detail-page/interfaces";

export const entities = {
  checkedBox: "☑", // "\u2611"
  emptyBox: "☐", // "\u2610"
  rightSubArrow: "↪", // "\u21AA"
  rightStraightArrow: "➜", // "\u279C"
};

export const liveTemplateTextEdf = `export default function $NAME$() {
  $END$
}`;

export const liveTemplateTextUc = `"use client";
$END$`;

export const headings: Headings = [
  {
    tag: "h1",
    content: "JetBrains WebStorm",
  },
  {
    tag: "h2",
    content: "Appearance & Behavior",
  },
  {
    tag: "h2",
    content: "Keymap",
  },
  {
    tag: "h2",
    content: "Editor",
  },
  {
    tag: "h2",
    content: "Plugins",
  },
  {
    tag: "h2",
    content: "Languages & Frameworks",
  },
  {
    tag: "h2",
    content: "Tools",
  },
  {
    tag: "h2",
    content: "Backup and Sync",
  },
  {
    tag: "h2",
    content: "Advanced Settings",
  },
  {
    tag: "h2",
    content: "Rainbow Brackets",
  },
];
