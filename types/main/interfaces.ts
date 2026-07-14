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

/**
 * @see [React Syntax Highlighter: Prism Available Languages](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD)
 */
export interface Code {
  language:
    | "html"
    | "css"
    | "scss"
    | "javascript"
    | "typescript"
    | "python"
    | "json"
    | "sql"
    | "git"
    | "bash"
    | "powershell"
    | "text";
  fileName?: string;
  content: string;
}

/**
 * - **Key**: `Slug`
 * - **Value**: `Page`
 *
 * @example
 * const pages: Pages = new Map([
 *   ['@import', <ImportPage />]
 * ]);
 */
export type Pages = Map<string, JSX.Element>;
