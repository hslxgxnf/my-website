import type { Reference } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  {
    target: "Entities",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Entity",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Entity",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Character_reference",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Character reference",
      },
      {
        url: "https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references",
        favicon: favicons.WHATWG.image,
        name: favicons.WHATWG.name,
        title: "13.5 Named character references",
      },
      {
        url: "https://www.toptal.com/designers/htmlarrows/",
        favicon: favicons.HTML_Arrows.image,
        name: favicons.HTML_Arrows.name,
        title:
          "A delightful reference for HTML Symbols, Entities and ASCII Character Codes",
      },
    ],
  },
  {
    target: "Non-Breaking Space   &nbsp;",
    sites: [
      {
        url: "https://www.daleseo.com/html-nbsp/",
        favicon: favicons.DaleSeo.image,
        name: favicons.DaleSeo.name,
        title: "HTML에서 &nbsp;를 언제, 왜 써야할까?",
      },
    ],
  },
];
