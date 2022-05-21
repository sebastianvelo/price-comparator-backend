import PageSource from "../page-source/page-source.interface";
import ScrapingStrategy from "../../strategy/scraping-strategy.interface";

interface SourceURLStrategy extends ScrapingStrategy<string, PageSource> { }

export default SourceURLStrategy;