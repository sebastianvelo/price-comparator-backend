import { Cheerio, CheerioAPI, Element } from "cheerio";
import { logAccent, logTitle } from "../../../common/Logger";
import PageSource from "../../common/source-url/page-source/page-source.interface";
import ScrapingStrategy from "../../common/strategy/scraping-strategy.interface";
import ProductListResponse from "../product-list.interface";
import ProductTransformer from "../transformer/transformer.interface";

abstract class ProductListScrapingStrategy implements ScrapingStrategy<ProductListResponse, PageSource> {
    protected abstract transformer: ProductTransformer;
    protected abstract getProductList: ($: CheerioAPI) => Cheerio<Element>;
    abstract appliesTo: (s: PageSource) => boolean;

    apply = (source: PageSource, query: string, $?: CheerioAPI): ProductListResponse => {
        if (!$) return [];
        logTitle(`\t[${source}] Initializing scrapping strategy for ${query}`);
        const products = this.getProductList($);
        logAccent(`\t[${source}] Scrapping ${products.length} products`);
        const productResponse = products.map((_: number, el: any) => this.transformer.apply(source, $(el))).toArray();
        logTitle(`\t[${source}] Finish scrapping strategy for ${query}`);
        return productResponse;
    };
}

export default ProductListScrapingStrategy;