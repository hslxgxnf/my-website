import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
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
];
