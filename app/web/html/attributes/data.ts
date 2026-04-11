import type { Reference, Code } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  {
    target: "Attributes",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Attribute",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Attribute",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTML attribute reference",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Global attributes",
      },
    ],
  },
  {
    target: "Enumerated Attributes",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Enumerated",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Enumerated",
      },
    ],
  },
  {
    target: "Custom Attributes",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Use data attributes",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTML data-* global attribute",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTMLElement: dataset property",
      },
      {
        url: "https://javascript.info/dom-attributes-and-properties",
        favicon: favicons.JAVASCRIPT$INFO.image,
        name: favicons.JAVASCRIPT$INFO.name,
        title: "Attributes and properties",
      },
    ],
  },
  {
    target: "Boolean Attributes",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Boolean attribute (HTML)",
      },
    ],
  },
  {
    target: "Attribute Reflection",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Attribute reflection",
      },
      {
        url: "https://javascript.info/dom-attributes-and-properties",
        favicon: favicons.JAVASCRIPT$INFO.image,
        name: favicons.JAVASCRIPT$INFO.name,
        title: "Attributes and properties",
      },
    ],
  },
  {
    target: `rel="noopener"`,
    sites: [
      {
        url: "https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable",
        favicon: favicons.Stack_Overflow.image,
        name: favicons.Stack_Overflow.name,
        title:
          'Link with target="_blank" and rel="noopener noreferrer" still vulnerable?',
      },
      {
        url: "https://despiteallthat.tistory.com/65",
        favicon: favicons.tistory.image,
        name: favicons.tistory.name,
        title: "[HTML] noopener noreferrer란?",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: 'rel="noopener"',
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noreferrer",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: 'rel="noreferrer"',
      },
      {
        url: "/web/html/elements#<a>",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "Elements | <a>",
      },
    ],
  },
  {
    target: "aria-*",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "ARIA states and properties (attributes)",
      },
    ],
  },
  {
    target: "role",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "WAI-ARIA Roles",
      },
    ],
  },
];

export const codeEnumeratedAttributes: Code = {
  language: "html",
  content: `<input type="text" />
<input type="password" />
<input type="email" />`,
};

export const codeCustomAttributesHTML: Code = {
  language: "html",
  content: `<div data-weight="100">Box</div>`,
};

export const codeCustomAttributesJS: Code = {
  language: "typescript",
  content: `const div = document.querySelector<HTMLDivElement>("div");
console.log(div?.dataset.weight); // "100"`,
};

export const codeBooleanAttributes: Code = {
  language: "html",
  content: `<!--All checkboxes will be checked-->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />`,
};

export const codeClass: Code = {
  language: "html",
  content: `<div class="common"></div>
<div class="common another"></div>`,
};
