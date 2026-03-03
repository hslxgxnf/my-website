import type { Reference, Code, Headings } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  // Attributes
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Attribute",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Attribute",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "HTML attribute reference",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Global attributes",
    },
  ],
  // Enumerated Attributes
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Enumerated",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Enumerated",
    },
  ],
  // Boolean Attributes
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Boolean attribute (HTML)",
    },
  ],
  // rel
  [
    {
      url: "https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable",
      image: favicons.Stack_Overflow.image,
      name: favicons.Stack_Overflow.name,
      title:
        'Link with target="_blank" and rel="noopener noreferrer" still vulnerable?',
    },
    {
      url: "https://despiteallthat.tistory.com/65",
      image: favicons.tistory.image,
      name: favicons.tistory.name,
      title: "[HTML] noopener noreferrer란?",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: 'rel="noopener"',
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noreferrer",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: 'rel="noreferrer"',
    },
    {
      url: "/web/html/elements#<a>",
      image: favicons.Article_Shortcut.image,
      name: favicons.Article_Shortcut.name,
      title: "Elements | <a>",
    },
  ],
  // aria-*
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "ARIA states and properties (attributes)",
    },
  ],
  // role
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "WAI-ARIA Roles",
    },
  ],
];

export const codeEnumeratedAttributes: Code = {
  language: "haml",
  content: `<input type="text" />
<input type="password" />
<input type="email" />`,
};

export const codeBooleanAttributes: Code = {
  language: "haml",
  content: `<!--All checkboxes will be checked-->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />`,
};

export const codeClass: Code = {
  language: "haml",
  content: `<div class="common"></div>
<div class="common another"></div>`,
};

export const headings: Headings = [
  {
    tag: "h1",
    content: "Attributes",
  },
  {
    tag: "h2",
    content: "Enumerated Attributes",
  },
  {
    tag: "h2",
    content: "Boolean Attributes",
  },
  {
    tag: "h2",
    content: "Examples",
  },
];
