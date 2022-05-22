import PageSource from "../../../page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class MercadoLibreImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/mercadolibre.com`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.MERCADOLIBRE;
    };

};

export default MercadoLibreImageStrategy;