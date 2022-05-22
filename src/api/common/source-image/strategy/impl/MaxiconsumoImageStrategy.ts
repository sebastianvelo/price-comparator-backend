import PageSource from "../../../source-url/page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class MaxiconsumoImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/maxiconsumo.com`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.MAXICONSUMO;
    };

};

export default MaxiconsumoImageStrategy;