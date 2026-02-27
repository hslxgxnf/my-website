import type { Reference, Code } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference[] = [
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments",
    image: favicons.mdn.image,
    name: favicons.mdn.name,
    title: "Using HTML comments <!-- … -->",
  },
];

export const code: Code = {
  language: "haml",
  content: `<!-- This is a comment in HTML. -->`,
};
