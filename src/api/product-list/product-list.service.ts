import { logAccent, logTitle } from "../../common/Logger";
import * as PageService from "../common/page/page.service";
import PageSource from "../common/source-url/page-source/page-source.interface";
import * as SourceURLService from "../common/source-url/source-url.service";
import ProductListResponse from "./product-list.interface";
import * as StrategyService from "./strategy/strategy.service";

interface SearchInSource {
    source: PageSource;
    query: string;
};

interface SearchInSources {
    sources: PageSource[];
    query: string;
}

export const searchInSource = async (request: SearchInSource): Promise<ProductListResponse> => {
    logAccent(`||||||||||||||||||||||||||||||||||||||||||||||`);
    logTitle(`[${request.source}] Retriving ${request.query}`);
    let products: ProductListResponse = [];
    try {
        const url = SourceURLService.retrieveURL(request);
        const $ = await PageService.getPage(url);
        logAccent(`||||||||||||||||||||||||||||||||||||||||||||||`);
        products = StrategyService.getStrategy(request.source).apply(request.source, request.query, $);
    } catch (err) {
        logTitle(`[${request.source}] ${err}`);
    }
    return products;
};

export const searchInSources = async (request: SearchInSources): Promise<ProductListResponse> => {
    try {
        const products = await Promise.all(request.sources.map(source => searchInSource({ source, query: request.query })));
        return products.flatMap(p => p).sort((a, b) => a.price.value - b.price.value);
    } catch (err) {
        console.error(err);
    }
    return [];
}