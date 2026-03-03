import type { Reference, Code } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  // Comments
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Using HTML comments <!-- … -->",
    },
  ],
];

export const code: Code = {
  language: "haml",
  content: `<!-- This is a comment in HTML. -->`,
};
