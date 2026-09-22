import { ReactNode } from "react";
import { FaSortAlphaDown } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";

import toTitleCase from "@/functions/all/toTitleCase";

type SRHelperType =
  | "project-specificity"
  | "ascending-sort"
  | "option-toggle"
  | "subcategory"
  | "checked"
  | "unchecked"
  | "empty"
  | "next"
  | "settings";

interface SRHelperProps {
  type: SRHelperType;
}

const data = new Map<SRHelperType, ReactNode>([
  ["project-specificity", <strong key="strong">!</strong>],
  ["ascending-sort", <FaSortAlphaDown key="ascending-sort" />],
  ["option-toggle", <PiCaretDownBold key="option-toggle" />],
  ["subcategory", "↪"], // &#8618;
  ["checked", "☑"], // &#9745;
  ["unchecked", "☐"], // &#9744;
  ["empty", ""],
  ["next", "➜"], // &#10140;
  ["settings", "⚙"], // &#9881;
]);

export default function SRHelper({ type }: SRHelperProps) {
  return (
    <>
      <span className="visual-only" aria-hidden="true">
        {data.get(type)}
      </span>
      <span className="sr-only">{toTitleCase(type)}</span>
    </>
  );
}
