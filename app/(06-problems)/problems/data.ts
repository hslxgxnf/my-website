import type { Reference } from "@/types/interfaces";
import { favicons } from "@/assets/images/favicons";

export const reference: Reference = [
  {
    target: "Problems",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/explore",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "All Problems",
      },
    ],
  },
];
