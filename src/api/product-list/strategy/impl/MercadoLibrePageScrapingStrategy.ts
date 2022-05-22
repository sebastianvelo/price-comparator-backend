import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/page-source/page-source.interface";
import MercadoLibreProductTransformer from "../../transformer/impl/MercadoLibreProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class MercadoLibrePageScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new MercadoLibreProductTransformer();
    protected getProductList = ($: CheerioAPI) => $(".ui-search-layout.ui-search-layout--stack > li");

    appliesTo = (source: PageSource): boolean => {
        const sources = [PageSource.MERCADOLIBRE, PageSource.GARBARINO];
        return sources.includes(source);
    };

};

export default MercadoLibrePageScrapingStrategy;