import PageSource from "../../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class DiaURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://diaonline.supermercadosdia.com.ar/busca/?ft=${query}`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.DIA;
    };

};

export default DiaURLStrategy;