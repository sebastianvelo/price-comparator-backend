import axios from "axios";
import * as cheerio from "cheerio";
import { logTitle } from "../../../common/Logger";

export const getPage = async (url: string): Promise<cheerio.CheerioAPI | undefined> => {
    let parsedURL = url.replace(/ /g, "%20");
    try {
        logTitle(`\tRetrieving page: ${parsedURL}`);
        const { data } = await axios.get(parsedURL);
        return cheerio.load(data);
    } catch (e: any) {
        console.error(e.message);
    }
};