import ScrapingStrategy from "./scraping-strategy.interface";

export const getStrategy = <T, Q>(strategies: ScrapingStrategy<T, Q>[], q: Q): ScrapingStrategy<T, Q> => {
    const strategy = strategies.find(strategy => strategy.appliesTo(q));
    if (!strategy) {
        throw new Error(`Strategy not found for query: ${q}`);
    }
    return strategy;
}