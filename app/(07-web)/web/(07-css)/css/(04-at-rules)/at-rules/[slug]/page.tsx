import type { Pages } from "@/types/main/interfaces";
import ImportPage from "../_slug-02-@import/page";
import LayerPage from "../_slug-03-@layer/page";
import createSlugPages from "@/functions/main-description/createSlugPages";

const pages: Pages = new Map([
  ["@import", ImportPage],
  ["@layer", LayerPage],
]);

const { generateMetadata, Page } = createSlugPages(pages);

export { generateMetadata };
export default Page;
