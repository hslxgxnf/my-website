import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Vanilla",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "JavaScript",
      },
      {
        url: "https://javascript.info/",
        favicon: favicons.JAVASCRIPT$INFO.image,
        name: favicons.JAVASCRIPT$INFO.name,
        title: "The Modern JavaScript Tutorial",
      },
    ],
  },
];
