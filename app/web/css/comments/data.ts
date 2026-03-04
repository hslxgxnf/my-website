import type { Reference, Code } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  [
    {
      url: "",
      image: "",
      name: "",
      title: "Comments",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/Comments",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Comments",
    },
  ],
];

export const code: Code = {
  language: "css",
  content: `/*This is a comment in CSS*/`,
};
