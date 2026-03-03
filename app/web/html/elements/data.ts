import type { Reference, Headings } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  // Elements
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Element",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Element",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Tag",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Tag",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "HTML elements reference",
    },
  ],
  // Void Elements
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Void_element",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Void element",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "The <label>, <input>, and <textarea> elements",
    },
  ],
  // Content Categories
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Content categories",
    },
  ],
  // <dialog>
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "<dialog>: The Dialog element",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "HTMLDialogElement",
    },
  ],
  // <form>
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "<form>: The Form element",
    },
    {
      url: "https://www.w3schools.com/tags/att_form_method.asp",
      image: favicons.W3Schools.image,
      name: favicons.W3Schools.name,
      title: "HTML <form> method Attribute",
    },
    {
      url: "https://www.youtube.com/watch?v=Tgur7JNqpLM&list=PLU9-uwewPMe0sQkZlOhnhl8MRb_uFJBID&index=34",
      image: favicons.YouTube.image,
      name: favicons.YouTube.name,
      title: "8-2. Form 태그 요청의 처리 - GET, POST",
    },
  ],
  // <table>
  [
    {
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "HTML table basics",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "HTML table accessibility",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "<table>: The Table element",
    },
  ],
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
