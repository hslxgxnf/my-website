import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

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
    target: "Languages & Frameworks",
    sites: [
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
      {
        url: "/web/eslint",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "ESLint",
      },
    ],
  },
  {
    target: "Tools",
    sites: [
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
];
