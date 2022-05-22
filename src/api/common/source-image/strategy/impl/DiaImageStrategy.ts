import PageSource from "../../../source-url/page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class DiaImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/dia.es`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.DIA;
    };

};

export default DiaImageStrategy;