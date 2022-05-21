import { Cheerio, Element } from "cheerio";
import ProductTransformer from "../transformer.interface";

class CotoProductTransformer extends ProductTransformer {
    protected getUrl = (element: Cheerio<Element>) => `https://www.cotodigital3.com.ar${element.find("a").attr("href")}` ?? "";

    protected getImage = (element: Cheerio<Element>) => element.find("img").attr("src") ?? "";

    protected getName = (element: Cheerio<Element>) => element.find(".span_productName").text().replace(/\n/g, "").replace(/\t/g, "");

    protected getPrice = (element: Cheerio<Element>) => {
        const currency = "$";
        const price = element.find(".atg_store_newPrice").text().match(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/)![0] ?? "";
        const value = +price
            .replace(".", "")
            .replace(",", ".");
        return {
            currency, value
        };
    };
}

export default CotoProductTransformer;