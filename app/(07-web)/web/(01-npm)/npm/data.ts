import type { Reference } from "@/types/interfaces";
import { favicons } from "@/assets/favicons/favicons";

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
