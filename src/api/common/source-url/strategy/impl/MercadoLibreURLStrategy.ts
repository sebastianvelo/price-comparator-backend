import PageSource from "../../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class MercadoLibreURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://listado.mercadolibre.com.ar/${query}_OrderId_PRICE_NoIndex_True_PRICE_True`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.MERCADOLIBRE;
    };

};

export default MercadoLibreURLStrategy;