import type { Reference, Code } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  {
    target: "Comments",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Using HTML comments <!-- … -->",
      },
    ],
  },
];

export const code: Code = {
  language: "html",
  content: `<!--This is a comment in HTML-->`,
};
