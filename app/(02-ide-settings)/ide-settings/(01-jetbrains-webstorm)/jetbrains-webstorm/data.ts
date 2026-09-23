import type { Reference } from "@/types/interfaces";
import { favicons } from "@/assets/favicons/favicons";

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
    target: "Plugins",
    sites: [
      {
        url: "/ide-settings/jetbrains-pycharm#plugins",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains PyCharm | Plugins",
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
  {
    target: "Rainbow Brackets",
    sites: [
      {
        url: "/ide-settings/jetbrains-pycharm#rainbow-brackets",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains PyCharm | Rainbow Brackets",
      },
    ],
  },
];

export const liveTemplateTextEdf = `export default function $NAME$() {
  $END$
}`;

export const liveTemplateTextUc = `"use client";
$END$`;
