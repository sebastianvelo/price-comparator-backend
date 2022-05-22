import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const init = (app: Express) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(helmet());
}

export default init;