import { Express } from "express";
import productListRouter from "./api/product-list/product-list.router";

const ROUTER_PREFIX = "/api";

const setRoutes = (app: Express) => {
    app.use(`${ROUTER_PREFIX}/product/list`, productListRouter);
}

export default setRoutes;