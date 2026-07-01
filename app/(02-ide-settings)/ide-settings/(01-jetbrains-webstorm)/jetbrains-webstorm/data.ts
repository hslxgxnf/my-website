import type { Reference } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

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

export const reference: Reference = [
  {
    target: "Appearance & Behavior",
    sites: [
      {
        url: "/ide-settings/jetbrains-pycharm#appearance-&-behavior",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains PyCharm | Appearance & Behavior",
      },
    ],
  },
  {
    target: "Keymap",
    sites: [
      {
        url: "/ide-settings/jetbrains-pycharm#keymap",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains PyCharm | Keymap",
      },
    ],
  },
  {
    target: "Languages & Frameworks",
    sites: [
      {
        url: "/web/eslint",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "ESLint",
      },
      {
        url: "/web/prettier",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "Prettier",
      },
      {
        url: "/web/stylelint",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "Stylelint",
      },
    ],
  },
  {
    target: "Tools",
    sites: [
      {
        url: "/web/stylelint",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "Stylelint",
      },
      {
        url: "/web/prettier",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "Prettier",
      },
      {
        url: "/windows#oh-my-posh",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "Windows | Oh My Posh",
      },
    ],
  },
  {
    target: "Backup and Sync",
    sites: [
      {
        url: "/ide-settings/jetbrains-pycharm#backup-and-sync",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains PyCharm | Backup and Sync",
      },
    ],
  },
];
