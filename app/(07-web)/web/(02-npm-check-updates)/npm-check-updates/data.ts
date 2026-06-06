import type { Reference } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "npm-check-updates",
    sites: [
      {
        url: "https://www.npmjs.com/package/npm-check-updates",
        favicon: favicons.npm.image,
        name: favicons.npm.name,
        title: "npm-check-updates",
      },
    ],
  },
];
