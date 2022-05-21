import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class FravegaProductTransformer extends ProductTransformer {

    protected getUrl = (element: Cheerio<Element>) => {
        const href = element.find("a").attr("href");
        return `https://www.fravega.com${href}`;
    };

    protected getId = (element: Cheerio<Element>) => {
        const words = this.getUrl(element).split("-");
        return words[words.length - 1];
    };

    protected getImage = (element: Cheerio<Element>) => element.find("img").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find("span").text();

    protected getCalification = (element: Cheerio<Element>) => {
        const quantity: number = +element.find(".ui-search-reviews__amount").text();
        return {
            quantity
        }
    };

    protected getPrice = (element: Cheerio<Element>) => {
        const price = element
            .find("[data-test-id='product-price'] > .Ojxif")
            .text();
        const currency = price[0];
        const value = +price
            .slice(1)
            .replace(".", "")
            .replace(".", ",")
        return {
            currency, value
        };
    };

}

export default FravegaProductTransformer;