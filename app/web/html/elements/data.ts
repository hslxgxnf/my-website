import type { Reference, Headings } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  {
    target: "Elements",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Element",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Element",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Tag",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Tag",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTML elements reference",
      },
    ],
  },
  {
    target: "Void Elements",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Void_element",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Void element",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "The <label>, <input>, and <textarea> elements",
      },
    ],
  },
  {
    target: "Content Categories",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Content categories",
      },
    ],
  },
  {
    target: "<dialog>",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "<dialog>: The Dialog element",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTMLDialogElement",
      },
    ],
  },
  {
    target: "<form>",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "<form>: The Form element",
      },
      {
        url: "https://www.w3schools.com/tags/att_form_method.asp",
        favicon: favicons.W3Schools.image,
        name: favicons.W3Schools.name,
        title: "HTML <form> method Attribute",
      },
      {
        url: "https://www.youtube.com/watch?v=Tgur7JNqpLM&list=PLU9-uwewPMe0sQkZlOhnhl8MRb_uFJBID&index=34",
        favicon: favicons.YouTube.image,
        name: favicons.YouTube.name,
        title: "8-2. Form 태그 요청의 처리 - GET, POST",
      },
    ],
  },
  {
    target: "<table>",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "<table>: The Table element",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTML table basics",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "HTML table accessibility",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Styling tables",
      },
    ],
  },
  {
    target: "<a>",
    sites: [
      {
        url: '/web/html/attributes#rel="noopener"',
        favicon: favicons.Article_Shortcut.image,
        name: favicons.Article_Shortcut.name,
        title: 'Attributes | rel="noopener"',
      },
    ],
  },
];

export const headings: Headings = [
  {
    tag: "h1",
    content: "Elements",
  },
  {
    tag: "h2",
    content: "Normal Elements",
  },
  {
    tag: "h2",
    content: "Void Elements",
  },
  {
    tag: "h2",
    content: "Content Categories",
  },
];
