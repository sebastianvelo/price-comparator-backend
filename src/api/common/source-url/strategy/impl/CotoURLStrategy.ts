import PageSource from "../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class CotoURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://www.cotodigital3.com.ar/sitios/cdigi/browse?&Ntt=${query}`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.COTO;
    };

};

export default CotoURLStrategy;