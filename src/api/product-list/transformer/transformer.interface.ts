import { Cheerio, Element } from "cheerio";
import { logAccent, logInfo } from "../../../common/Logger";
import PageSource from "../../common/source-url/page-source/page-source.interface";
import ModelTransformer from "../../common/transformer/transformer.interface";
import Product, { Calification, Price } from "../../product/product.interface";
import * as SourceImageService from "../../../api/common/source-image/source-image.service";

abstract class ProductTransformer implements ModelTransformer<Product> {
    protected getId: (element: Cheerio<Element>) => string | undefined = () => undefined;
    protected getCalification: (element: Cheerio<Element>) => Calification | undefined = () => undefined;
    protected abstract getUrl: (element: Cheerio<Element>) => string;
    protected abstract getImage: (element: Cheerio<Element>) => string;
    protected abstract getName: (element: Cheerio<Element>) => string;
    protected abstract getPrice: (element: Cheerio<Element>) => Price;

    apply = (source: PageSource, element: Cheerio<Element>): Product | undefined => {
        const product = {
            source,
            id: this.getId(element),
            url: this.getUrl(element),
            image: this.getImage(element),
            name: this.getName(element),
            price: this.getPrice(element),
            calification: this.getCalification(element),
            sourceImage: SourceImageService.retrieveImage(source)
        };
        if(!product.price.value || product.price.value === -1) {
            logAccent(`\t\tIgnoring ${product.name}`);
            return undefined;
        };

        logInfo(`\t\tScrapping ${product.name}`);
        return product;
    };
}

export default ProductTransformer;