import { CheerioAPI } from "cheerio";
import PageSource from "../page-source/page-source.interface";

interface ScrapingStrategy<T, S> {
    apply: (source: PageSource, query: string, $?: CheerioAPI) => T;
    appliesTo: (s: S) => boolean;
}

export default ScrapingStrategy;