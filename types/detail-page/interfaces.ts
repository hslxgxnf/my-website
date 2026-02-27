import type { StaticImageData } from "next/image";

export interface Reference {
  url: string;
  image: StaticImageData;
  name: string;
  title: string;
}

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
export interface Code {
  language: "haml" | "css" | "javascript" | "typescript" | "git" | "powershell";
  content: string;
}
