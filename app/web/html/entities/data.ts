import type { Reference } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const referenceFirst: Reference[] = [
  {
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Entity",
    image: favicons.mdn.image,
    name: favicons.mdn.name,
    title: "Entity",
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Character_reference",
    image: favicons.mdn.image,
    name: favicons.mdn.name,
    title: "Character reference",
  },
  {
    url: "https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references",
    image: favicons.whatwg.image,
    name: favicons.whatwg.name,
    title: "13.5 Named character references",
  },
];

export const referenceSecond: Reference[] = [];
