import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/source-url/page-source/page-source.interface";
import DiaProductTransformer from "../../transformer/impl/DiaProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class DiaPageScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new DiaProductTransformer();
    protected getProductList = ($: CheerioAPI) => $(".prateleira > ul");

    appliesTo = (source: PageSource): boolean => {
        const sources = [PageSource.DIA];
        return sources.includes(source);
    };

};

export default DiaPageScrapingStrategy;