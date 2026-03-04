import type { Reference, Code, Headings } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  [
    {
      url: "",
      image: "",
      name: "",
      title: "Connecting CSS to HTML",
    },
    {
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#adding_css_to_our_document",
      image: favicons.MDN.image,
      name: favicons.MDN.name,
      title: "Adding CSS to our document",
    },
  ],
];

export const codeExternalCSSHTML: Code = {
  language: "handlebars",
  content: `<head>
  <link rel="stylesheet" href="path" />
</head>`,
};

export const codeExternalCSSCSS: Code = {
  language: "css",
  content: `body {
  background-color: gray;
}`,
};

export const codeInternalCSS: Code = {
  language: "handlebars",
  content: `<head>
  <style>
    body {
      background-color: gray;
    }
  </style>
</head>`,
};

export const codeInlineCSS: Code = {
  language: "handlebars",
  content: `<body style="background-color: gray"></body>`,
};

export const headings: Headings = [
  {
    tag: "h1",
    content: "Connecting CSS to HTML",
  },
  {
    tag: "h2",
    content: "External CSS",
  },

  {
    tag: "h2",
    content: "Internal CSS",
  },
  {
    tag: "h2",
    content: "Inline CSS",
  },
];
