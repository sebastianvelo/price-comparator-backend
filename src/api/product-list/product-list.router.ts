import express, { Request, Response } from "express";
import PageSource from "../common/page-source/page-source.interface";
import ProductListResponse from "./product-list.interface";
import * as ProductListService from "./product-list.service";

const productListRouter = express.Router();

productListRouter.get("/:source/:query", async (req: Request, res: Response) => {
    const source: PageSource = req.params.source as PageSource;
    const query: string = req.params.query;

    try {
        const response: ProductListResponse = await ProductListService.searchInSource({ source, query });
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
        return res.status(200).send(response);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

productListRouter.post("/:query", async (req: Request, res: Response) => {
    const query: string = req.params.query;
    const sources: PageSource[] = req.body.sources as PageSource[];

    try {
        const response: ProductListResponse = await ProductListService.searchInSources({ sources, query });
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
        return res.status(200).send(response);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

export default productListRouter;
