import type { Reference, Code } from "@/types/interfaces";
import { favicons } from "@/assets/images/favicons";
import {
  custom_properties$txt,
  non_custom_properties$txt,
} from "@/assets/files/texts";

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
        favicon: favicons.Rhodes_Mill.image,
        name: favicons.Rhodes_Mill.name,
        title: "Concentric CSS",
      },
    ],
  },
];

export const customPropertiesCode: Code = {
  language: "text",
  fileName: "custom-properties.txt",
  content: `${custom_properties$txt}`,
};

export const nonCustomPropertiesCode: Code = {
  language: "text",
  fileName: "non-custom-properties.txt",
  content: `${non_custom_properties$txt}`,
};
