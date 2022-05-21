import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class DiaProductTransformer extends ProductTransformer {
    protected getUrl = (element: Cheerio<Element>) => element.find("a").attr("href") ?? "";

    protected getImage = (element: Cheerio<Element>) => element.find("img").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find("a").attr("title") ?? "";

    protected getPrice = (element: Cheerio<Element>) => {
        const currency = "$";
        const price = element.find(".best-price").text().match(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/)![0] ?? "";
        const value = +price
            .replace(".", "")
            .replace(",", ".");
        return {
            currency, value
        };
    };
}

export default DiaProductTransformer;