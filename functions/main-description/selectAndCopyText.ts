export default async function selectAndCopyText(element: HTMLElement) {
  // Select
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  if (!selection) {
    console.error("No selection");
  } else {
    selection.removeAllRanges();
    selection.addRange(range);
  }

  // Copy
  const text = element.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(`Could not copy due to ${error}.`);
  }
}
