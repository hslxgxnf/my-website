import type { StaticImageData } from "next/image";

export interface Site {
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
    | "html"
    | "css"
    | "scss"
    | "javascript"
    | "typescript"
    | "python"
    | "json"
    | "git"
    | "powershell"
    | "text";
  fileName?: string;
  content: string;
}
