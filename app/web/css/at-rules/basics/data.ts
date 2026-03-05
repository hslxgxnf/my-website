import type { Reference } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  [
    {
      url: "",
      image: "",
      name: "",
      title: "Basics",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/At-rules",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "At-rules",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "CSS at-rules",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "CSS at-rule functions",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/At-rules",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "CSS nesting at-rules",
    },
  ],
];
