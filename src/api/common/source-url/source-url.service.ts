import RetrievePage from "./source-url.interface";
import * as StrategyService from "./strategy/strategy.service";

export const retrieveURL = (request: RetrievePage): string => {
    const url: string = StrategyService.getStrategy(request.source).apply(request.source, request.query);
    return url;
}