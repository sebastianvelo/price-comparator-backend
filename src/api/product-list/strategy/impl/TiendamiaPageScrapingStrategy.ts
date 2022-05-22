import { CheerioAPI } from "cheerio";
import PageSource from "../../../common/page-source/page-source.interface";
import TiendamiaProductTransformer from "../../transformer/impl/TiendamiaProductTransformer";
import ProductListScrapingStrategy from "../strategy.interface";

class TiendamiaProductListScrapingStrategy extends ProductListScrapingStrategy {
    protected transformer = new TiendamiaProductTransformer();
    protected getProductList = ($: CheerioAPI) => $(".item.button-border > a");

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.TIENDAMIA;
    };

};

export default TiendamiaProductListScrapingStrategy;