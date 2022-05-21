import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/source-url/page-source/page-source.interface";
import FravegaProductTransformer from "../../transformer/impl/FravegaProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class FravegaPageScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new FravegaProductTransformer();
    protected getProductList = ($: CheerioAPI) => $("[data-test-id='results-list'] > li");

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.FRAVEGA;
    };

};

export default FravegaPageScrapingStrategy;