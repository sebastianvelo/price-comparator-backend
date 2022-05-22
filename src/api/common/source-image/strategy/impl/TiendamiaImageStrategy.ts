import PageSource from "../../../page-source/page-source.interface";
import SourceImageStrategy from "../strategy.interface";

class TiendamiaImageStrategy implements SourceImageStrategy {

    apply = (_: PageSource): string => {
        return `https://play-lh.googleusercontent.com/nx9IjvLHg3H1b7xJyPBLLZcAG2p4woFFKy7sv2fzLA51b0HOj0hv5tfNMsR4_32nmQ`;
    };

    appliesTo = (source: PageSource): boolean => {
        return source === PageSource.TIENDAMIA;
    };

};

export default TiendamiaImageStrategy;