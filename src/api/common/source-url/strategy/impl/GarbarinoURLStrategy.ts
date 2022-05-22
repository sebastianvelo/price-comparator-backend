import PageSource from "../../../page-source/page-source.interface";
import SourceURLStrategy from "../strategy.interface";

class GarbarinoURLStrategy implements SourceURLStrategy {

    apply = (_: PageSource, query: string): string => {
        return `https://www.garbarino.com/${query}`;
    };
    
    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.GARBARINO;
    };

};

export default GarbarinoURLStrategy;