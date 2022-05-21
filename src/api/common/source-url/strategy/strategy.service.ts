import PageSource from "../page-source/page-source.interface";
import * as ScrapingStrategyService from "../../strategy/scraping-strategy.service";
import CarrefourURLStrategy from "./impl/CarrefourURLStrategy";
import CotoURLStrategy from "./impl/CotoURLStrategy";
import DiaURLStrategy from "./impl/DiaURLStrategy";
import FravegaURLStrategy from "./impl/FravegaURLStrategy";
import GarbarinoURLStrategy from "./impl/GarbarinoURLStrategy";
import MaxiconsumoURLStrategy from "./impl/MaxiconsumoURLStrategy";
import MercadoLibreURLStrategy from "./impl/MercadoLibreURLStrategy";
import TiendamiaURLStrategy from "./impl/TiendamiaURLStrategy";
import SourceURLStrategy from "./strategy.interface";

const strategies: SourceURLStrategy[] = [
    new TiendamiaURLStrategy(),
    new MercadoLibreURLStrategy(),
    new FravegaURLStrategy(),
    new GarbarinoURLStrategy(),
    new CotoURLStrategy(),
    new CarrefourURLStrategy(),
    new MaxiconsumoURLStrategy(),
    new DiaURLStrategy(),
];

export const getStrategy = (source: PageSource) => ScrapingStrategyService.getStrategy(strategies, source);