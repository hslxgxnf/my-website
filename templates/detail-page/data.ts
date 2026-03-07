import type { Reference, Code, Headings } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  {
    target: "",
    sites: [
      {
        url: "",
        favicon: favicons.Dummy.image,
        name: favicons.Dummy.name,
        title: "",
      },
    ],
  },
];

export const code: Code = {
  language: "javascript",
  content: ``,
};

export const headings: Headings = [
  {
    tag: "h1",
    content: "",
  },
];
