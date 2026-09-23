import type { Reference } from "@/types/interfaces";
import { favicons } from "@/assets/favicons/favicons";

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
