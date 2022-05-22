import PageSource from "../../source-url/page-source/page-source.interface";
import * as ScrapingStrategyService from "../../strategy/scraping-strategy.service";
import CarrefourImageStrategy from "./impl/CarrefourImageStrategy";
import CotoImageStrategy from "./impl/CotoImageStrategy";
import DiaImageStrategy from "./impl/DiaImageStrategy";
import FravegaImageStrategy from "./impl/FravegaImageStrategy";
import GarbarinoImageStrategy from "./impl/GarbarinoImageStrategy";
import MaxiconsumoImageStrategy from "./impl/MaxiconsumoImageStrategy";
import MercadoLibreImageStrategy from "./impl/MercadoLibreImageStrategy";
import TiendamiaImageStrategy from "./impl/TiendamiaImageStrategy";
import SourceImageStrategy from "./strategy.interface";

const strategies: SourceImageStrategy[] = [
    new TiendamiaImageStrategy(),
    new MercadoLibreImageStrategy(),
    new FravegaImageStrategy(),
    new GarbarinoImageStrategy(),
    new CotoImageStrategy(),
    new CarrefourImageStrategy(),
    new MaxiconsumoImageStrategy(),
    new DiaImageStrategy(),
];

export const getStrategy = (source: PageSource) => ScrapingStrategyService.getStrategy(strategies, source);