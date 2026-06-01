import type { MouseEvent } from "react";

export default async function selectAndCopyText(
  event: MouseEvent<HTMLElement>,
) {
  // Select
  const range = document.createRange();
  range.selectNodeContents(event.currentTarget);
  const selection = window.getSelection();
  if (!selection) {
    console.error("No selection");
  } else {
    selection.removeAllRanges();
    selection.addRange(range);
  }

  // Copy
  const text = event.currentTarget.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(`Could not copy due to ${error}.`);
  }
}
