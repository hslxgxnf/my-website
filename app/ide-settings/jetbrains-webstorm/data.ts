import type { Reference } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

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
    ],
  },
];
