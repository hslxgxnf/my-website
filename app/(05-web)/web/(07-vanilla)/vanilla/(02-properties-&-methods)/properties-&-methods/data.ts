import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Properties & Methods",
    sites: [
      {
        url: "https://javascript.info/document",
        favicon: favicons.JAVASCRIPT$INFO.image,
        name: favicons.JAVASCRIPT$INFO.name,
        title: "Document",
      },
    ],
  },
  {
    target: "Element.className",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/className",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Element: className property",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "String.prototype.includes()",
      },
    ],
  },
  {
    target: "Element.classList",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Element: classList property",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "DOMTokenList: contains() method",
      },
    ],
  },
];
