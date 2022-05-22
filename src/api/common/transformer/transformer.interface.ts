import { Cheerio, Element } from "cheerio";
import PageSource from "../page-source/page-source.interface";

interface ModelTransformer<T> {
    apply: (source: PageSource, element: Cheerio<Element>) => T | undefined;
}

export default ModelTransformer;