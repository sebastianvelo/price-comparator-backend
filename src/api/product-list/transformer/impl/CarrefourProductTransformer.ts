import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class CarrefourProductTransformer extends ProductTransformer {
    protected getUrl = (element: Cheerio<Element>) => `https://www.carrefour.com.ar/${element.find("a").attr("href")}` ?? "";

    protected getImage = (element: Cheerio<Element>) => element.find("img").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find(".vtex-product-summary-2-x-productBrand").text();

    protected getPrice = (element: Cheerio<Element>) => {
        const currency = element.find(".lyracons-carrefourarg-product-price-1-x-currencyCode").text();
        const value = +element.find(".lyracons-carrefourarg-product-price-1-x-currencyInteger").text();
        return {
            currency, value
        };
    };
}

export default CarrefourProductTransformer;