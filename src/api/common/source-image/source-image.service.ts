import PageSource from "../page-source/page-source.interface";
import * as StrategyService from "./strategy/strategy.service";

export const retrieveImage = (source: PageSource): string => {
    const url: string = StrategyService.getStrategy(source).apply(source, "");
    return url;
}