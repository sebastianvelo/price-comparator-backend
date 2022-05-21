import PageSource from "../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class FravegaURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://www.fravega.com/l/?keyword=${query}`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.FRAVEGA;
    };

};

export default FravegaURLStrategy;