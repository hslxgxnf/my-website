export default async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(`Could not copy due to ${error}.`);
    return;
  }
}
