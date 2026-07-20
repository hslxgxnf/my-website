import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Comments",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/Comments",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Comments",
      },
    ],
  },
];

export const code: Code = {
  language: "css",
  content: `/* Comment */
  
/*
 * Multiline
 * Comment
 */
 
/*!
 * This comment is still maintained after deployment minification.
 * It is used for essential information that must be preserved, such as copyrights or licenses.
 */
`,
};
