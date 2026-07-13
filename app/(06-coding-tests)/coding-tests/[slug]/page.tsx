import type { Pages } from "@/types/main/interfaces";
import KadanesAlgorithmPage from "../_slug-kadane's-algorithm/page";
import createSlugPages from "@/functions/main-description/createSlugPages";

const pages: Pages = new Map([["kadane's-algorithm", KadanesAlgorithmPage]]);

const { generateMetadata, Page } = createSlugPages(pages);

export { generateMetadata };
export default Page;
