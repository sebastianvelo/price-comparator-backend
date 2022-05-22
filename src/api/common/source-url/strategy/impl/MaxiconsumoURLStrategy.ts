import PageSource from "../../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class MaxiconsumoURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://maxiconsumo.com/sucursal_capital/catalogsearch/result/?q=${query}`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.MAXICONSUMO;
    };

};

export default MaxiconsumoURLStrategy;