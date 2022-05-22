import PageSource from "../../../page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class GarbarinoImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/garbarino.com`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.GARBARINO;
    };

};

export default GarbarinoImageStrategy;