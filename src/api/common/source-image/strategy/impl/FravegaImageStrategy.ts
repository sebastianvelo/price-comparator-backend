import PageSource from "../../../page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class FravegaImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/fravega.com`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.FRAVEGA;
    };

};

export default FravegaImageStrategy;