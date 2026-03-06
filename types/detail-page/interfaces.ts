import type { StaticImageData } from "next/image";

interface Site {
  url: string;
  favicon: StaticImageData;
  name: string;
  title: string;
}

interface ReferenceItem {
  target: string;
  sites: Site[];
}

export type Reference = ReferenceItem[];

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
export interface Code {
  language:
    | "handlebars"
    | "css"
    | "javascript"
    | "typescript"
    | "git"
    | "powershell";
  fileName?: string;
  content: string;
}

export type Headings = {
  tag: "h1" | "h2" | "h3";
  content: string;
}[];
