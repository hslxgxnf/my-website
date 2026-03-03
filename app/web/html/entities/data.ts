import type { Reference } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  [
    {
      url: "",
      image: "",
      name: "",
      title: "Entities",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Entity",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Entity",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Character_reference",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Character reference",
    },
    {
      url: "https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references",
      image: favicons.WHATWG.image,
      name: favicons.WHATWG.name,
      title: "13.5 Named character references",
    },
    {
      url: "https://www.toptal.com/designers/htmlarrows/",
      image: favicons.HTML_Arrows.image,
      name: favicons.HTML_Arrows.name,
      title:
        "A delightful reference for HTML Symbols, Entities and ASCII Character Codes",
    },
  ],
  // Non-Breaking Space
  [
    {
      url: "",
      image: "",
      name: "",
      title: "Non-Breaking Space  ",
    },
    {
      url: "https://www.daleseo.com/html-nbsp/",
      image: favicons.DaleSeo.image,
      name: favicons.DaleSeo.name,
      title: "HTML에서 &nbsp;를 언제, 왜 써야할까?",
    },
  ],
];
