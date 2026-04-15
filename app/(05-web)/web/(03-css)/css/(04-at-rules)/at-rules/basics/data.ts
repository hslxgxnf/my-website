import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Basics",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/At-rules",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "At-rules",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "CSS at-rules",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "CSS at-rule functions",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/At-rules",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "CSS nesting at-rules",
      },
    ],
  },
];
