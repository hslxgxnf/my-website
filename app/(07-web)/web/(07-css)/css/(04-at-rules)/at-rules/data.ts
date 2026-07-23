import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "At-Rules",
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
  {
    target: "@import",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@import",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "@import",
      },
    ],
  },
  {
    target: "@layer",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "@layer",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Cascade layers",
      },
    ],
  },
];

export const code: Code = {
  language: "javascript",
  content: ``,
};
