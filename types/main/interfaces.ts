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
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "git"
    | "powershell"
    | "text";
  fileName?: string;
  content: string;
}
