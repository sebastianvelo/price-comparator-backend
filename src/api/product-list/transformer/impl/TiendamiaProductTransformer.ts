import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class TiendamiaProductTransformer extends ProductTransformer {
    protected getUrl = (element: Cheerio<Element>) => element.attr("href") ?? "";

    protected getId = (element: Cheerio<Element>) => this.getUrl(element).split("/ar/producto?")[1].split("&")[0];

    protected getImage = (element: Cheerio<Element>) => element.find("img").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find(".item-name").text();

    protected getCalification = (element: Cheerio<Element>) => {
        const quantity: number = +element.find(".ui-search-reviews__amount").text();
        return {
            quantity
        }
    };

    protected getPrice = (element: Cheerio<Element>) => {
        const price = element.find(".currency_price").text().split(" ");
        const currency = price[0];
        const value = +price[1]?.replace(".", "").replace(",", ".");
        return {
            currency, value
        };
    };
}

export default TiendamiaProductTransformer;