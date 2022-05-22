import PageSource from "../../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class MaxiconsumoURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://maxiconsumo.com/sucursal_capital/catalogsearch/result/?q=${query}&product_list_order=price&product_list_limit=52`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.MAXICONSUMO;
    };

};

export default MaxiconsumoURLStrategy;