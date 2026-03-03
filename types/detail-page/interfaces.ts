import type { StaticImageData } from "next/image";

export type Reference = {
  url: string;
  image: StaticImageData | string;
  name: string;
  title: string;
}[][];

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
export interface Code {
  language: "haml" | "css" | "javascript" | "typescript" | "git" | "powershell";
  content: string;
}

export type Headings = {
  tag: "h1" | "h2" | "h3";
  content: string;
}[];
