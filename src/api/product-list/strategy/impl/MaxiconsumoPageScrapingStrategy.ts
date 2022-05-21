import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/source-url/page-source/page-source.interface";
import MaxiconsumoProductTransformer from "../../transformer/impl/MaxiconsumoProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class MaxiconsumoPageScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new MaxiconsumoProductTransformer();
    protected getProductList = ($: CheerioAPI) => $(".list > li");

    appliesTo = (source: PageSource): boolean => {
        const sources = [PageSource.MAXICONSUMO];
        return sources.includes(source);
    };

};

export default MaxiconsumoPageScrapingStrategy;