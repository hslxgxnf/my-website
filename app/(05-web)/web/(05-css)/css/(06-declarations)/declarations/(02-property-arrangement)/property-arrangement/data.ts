import type { Reference, Code } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";
import readFile from "@/functions/non-root/detail-page/readFile";

export const reference: Reference = [
  {
    target: "Property Arrangement",
    sites: [
      {
        url: "https://stackoverflow.com/questions/4878655/conventional-order-of-css-properties",
        favicon: favicons.Stack_Overflow.image,
        name: favicons.Stack_Overflow.name,
        title: "Conventional Order of CSS properties",
      },
      {
        url: "https://rhodesmill.org/brandon/2011/concentric-css/",
        favicon: favicons.none.image,
        name: favicons.none.name,
        title: "Concentric CSS",
      },
    ],
  },
];

export const customPropertiesCode: Code = {
  language: "text",
  content: `${await readFile("custom-properties.txt")}`,
};

export const propertiesCode: Code = {
  language: "text",
  content: `${await readFile("non-custom-properties.txt")}`,
};
