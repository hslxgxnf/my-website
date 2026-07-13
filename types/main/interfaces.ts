import type { StaticImageData } from "next/image";
import { JSX } from "react";

export interface Site {
  url: string;
  favicon: StaticImageData;
  name: string;
  title: string;
}

export type Reference = {
  target: string;
  sites: Site[];
}[];

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
    | "bash"
    | "text";
  fileName?: string;
  content: string;
}

type Slug = string;
type Page = () => JSX.Element;
export type Pages = Map<Slug, Page>;
