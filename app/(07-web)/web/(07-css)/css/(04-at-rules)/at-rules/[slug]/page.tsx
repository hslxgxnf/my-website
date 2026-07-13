import type { Pages } from "@/types/main/interfaces";
import ImportPage from "../_slug-02-@import/page";
import LayerPage from "../_slug-03-@layer/page";
import createSlugPages from "@/functions/main-description/createSlugPages";

const pages: Pages = new Map([
  /* eslint-disable react/jsx-key */
  ["@import", <ImportPage />],
  ["@layer", <LayerPage />],
  /* eslint-enable react/jsx-key */
]);

const { generateMetadata, Page } = createSlugPages(pages);

export { generateMetadata };
export default Page;
