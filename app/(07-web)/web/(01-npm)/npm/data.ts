import type { Reference } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "npm",
    sites: [
      {
        url: "https://www.npmjs.com/",
        favicon: favicons.npm.image,
        name: favicons.npm.name,
        title: "",
      },
    ],
  },
];
