import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class MaxiconsumoProductTransformer extends ProductTransformer {
    protected getUrl = (element: Cheerio<Element>) => element.find("a").attr("href") ?? "";

    protected getImage = (element: Cheerio<Element>) => element.find("img").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find("img").attr("alt") ?? "";

    protected getPrice = (element: Cheerio<Element>) => {
        const currency = "$";
        const price = element.find(".price").first().text().match(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/);
        const value = price ? +price[0]
            .replace(".", "")
            .replace(",", ".") : -1;
        return {
            currency, value
        };
    };
}

export default MaxiconsumoProductTransformer;