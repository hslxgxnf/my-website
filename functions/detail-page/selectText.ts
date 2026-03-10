import { RefObject } from "react";

export default function selectText(ref: RefObject<HTMLElement | null>) {
  if (!ref.current) throw new Error("No ref");

  const range = document.createRange();
  range.selectNodeContents(ref.current);

  const selection = window.getSelection();
  if (!selection) {
    console.error("No selection");
    return;
  }
  selection.removeAllRanges();
  selection.addRange(range);
}
