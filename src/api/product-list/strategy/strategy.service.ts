import PageSource from "../../common/source-url/page-source/page-source.interface";
import * as ScrapingStrategyService from "../../common/strategy/scraping-strategy.service";
import CarrefourPageScrapingStrategy from "./impl/CarrefourPageScrapingStrategy";
import CotoPageScrapingStrategy from "./impl/CotoPageScrapingStrategy";
import DiaPageScrapingStrategy from "./impl/DiaPageScrapingStrategy";
import FravegaPageScrapingStrategy from "./impl/FravegaPageScrapingStrategy";
import MaxiconsumoPageScrapingStrategy from "./impl/MaxiconsumoPageScrapingStrategy";
import MercadoLibrePageScrapingStrategy from "./impl/MercadoLibrePageScrapingStrategy";
import TiendamiaProductListScrapingStrategy from "./impl/TiendamiaPageScrapingStrategy";
import ProductListScrapingStrategy from "./strategy.interface";

const strategies: ProductListScrapingStrategy[] = [
    new TiendamiaProductListScrapingStrategy(),
    new MercadoLibrePageScrapingStrategy(),
    new FravegaPageScrapingStrategy(),
    new CotoPageScrapingStrategy(),
    new CarrefourPageScrapingStrategy(),
    new MaxiconsumoPageScrapingStrategy(),
    new DiaPageScrapingStrategy(),
];

export const getStrategy = (source: PageSource) => ScrapingStrategyService.getStrategy(strategies, source);