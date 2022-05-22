import PageSource from "../../source-url/page-source/page-source.interface";
import ScrapingStrategy from "../../strategy/scraping-strategy.interface";

interface SourceImageStrategy extends ScrapingStrategy<string, PageSource> { }

export default SourceImageStrategy;