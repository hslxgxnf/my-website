import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

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

export const code: Code = {
  language: "javascript",
  content: ``,
};
