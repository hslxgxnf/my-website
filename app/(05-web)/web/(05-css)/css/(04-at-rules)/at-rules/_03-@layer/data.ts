import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "@layer",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "@layer",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Cascade layers",
      },
    ],
  },
];
