import PageSource from "../../../source-url/page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class CarrefourImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/www.carrefour.com`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.CARREFOUR;
    };

};

export default CarrefourImageStrategy;