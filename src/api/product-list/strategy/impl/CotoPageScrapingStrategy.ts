import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/page-source/page-source.interface";
import CotoProductTransformer from "../../transformer/impl/CotoProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class CotoPageScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new CotoProductTransformer();
    protected getProductList = ($: CheerioAPI) => $("#products > li");

    appliesTo = (source: PageSource): boolean => {
        const sources = [PageSource.COTO];
        return sources.includes(source);
    };

};

export default CotoPageScrapingStrategy;