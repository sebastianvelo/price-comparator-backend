import PageSource from "../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class CarrefourURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://www.carrefour.com.ar/${query}`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.CARREFOUR;
    };

};

export default CarrefourURLStrategy;