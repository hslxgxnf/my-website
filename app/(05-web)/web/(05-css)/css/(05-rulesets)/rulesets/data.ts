import type { Reference, Code } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Rulesets",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/Introduction",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title:
          "Introduction to CSS syntax: declarations, rulesets, and statements",
      },
    ],
  },
];

export const code: Code = {
  language: "css",
  content: `* {
  box-sizing: border-box;
}

h1,
h2 {
  font-size: 30px;
}`,
};
