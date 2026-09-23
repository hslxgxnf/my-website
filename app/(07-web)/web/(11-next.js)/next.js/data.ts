import type { Reference } from "@/types/interfaces";
import { favicons } from "@/assets/images/favicons";

export const reference: Reference = [
  {
    target: "Next.js",
    sites: [
      {
        url: "https://nextjs.org/",
        favicon: favicons.Next$js.image,
        name: favicons.Next$js.name,
        title: "",
      },
      {
        url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
        favicon: favicons.Udemy.image,
        name: favicons.Udemy.name,
        title: "Next.js & React - The Complete Guide",
      },
    ],
  },
];
