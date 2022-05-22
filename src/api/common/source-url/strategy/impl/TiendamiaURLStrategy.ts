import PageSource from "../../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class TiendamiaURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://tiendamia.com/ar/search?amzs=${query}`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.TIENDAMIA;
    };

};

export default TiendamiaURLStrategy;