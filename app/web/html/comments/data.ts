import type { Reference, Code } from "@/types/interfaces";
import mdn from "@/assets/mdn.ico";

export const reference: Reference[] = [
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments",
    image: mdn,
    name: "MDN",
    title: "Using HTML comments <!-- … -->",
  },
];

export const code: Code = {
  language: "haml",
  content: `<!-- This is a comment in HTML. -->`,
};
