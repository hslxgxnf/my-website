import type { Pages } from "@/types/main/interfaces";
import KadanesAlgorithmPage from "../_slug-kadane's-algorithm/page";
import createSlugPages from "@/functions/main-description/createSlugPages";

const pages: Pages = new Map([
  /* eslint-disable react/jsx-key */
  ["kadane's-algorithm", <KadanesAlgorithmPage />],
  /* eslint-enable react/jsx-key */
]);

const { generateMetadata, Page } = createSlugPages(pages);

export { generateMetadata };
export default Page;
