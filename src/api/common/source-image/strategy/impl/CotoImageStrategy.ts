import PageSource from "../../../source-url/page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class CotoImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://logo.clearbit.com/www.coto.com.ar`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.COTO;
    };

};

export default CotoImageStrategy;