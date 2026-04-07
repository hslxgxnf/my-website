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
    target: "Custom Order",
    sites: [
      {
        url: "/web/css/declarations/property-arrangement",
        favicon: favicons.Article_Shortcut.image,
        name: favicons.Article_Shortcut.name,
        title: "Property Arrangement",
      },
    ],
  },
];
