import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/source-url/page-source/page-source.interface";
import CarrefourProductTransformer from "../../transformer/impl/CarrefourProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class CarrefourPageScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new CarrefourProductTransformer();
    protected getProductList = ($: CheerioAPI) => $(".lyracons-search-result-1-x-gallery > div");

    appliesTo = (source: PageSource): boolean => {
        const sources = [PageSource.CARREFOUR];
        return sources.includes(source);
    };

};

export default CarrefourPageScrapingStrategy;