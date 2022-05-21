import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class MercadoLibreProductTransformer extends ProductTransformer {
    protected getUrl = (element: Cheerio<Element>) => element.find("a").attr("href") ?? "";

    protected getId = (element: Cheerio<Element>) => {
        const words = this.getUrl(element).split("/p/")[1]?.split("#")[0];
        return words && words[words.length - 1];
    };

    protected getImage = (element: Cheerio<Element>) => element.find(".ui-search-result-image__element").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find(".ui-search-item__title").text();

    protected getCalification = (element: Cheerio<Element>) => {
        const quantity: number = +element.find(".ui-search-reviews__amount").text();
        return {
            quantity
        }
    };

    protected getPrice = (element: Cheerio<Element>) => {
        const currency = element.find(".price-tag-symbol").text();
        const value = +element
            .find(".price-tag-fraction")
            .text()
            .replace(".", "")
            .replace(".", ",");
        return {
            currency, value
        };
    };
}

export default MercadoLibreProductTransformer;