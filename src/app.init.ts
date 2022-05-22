import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const init = (app: Express) => {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://http://192.168.0.100:5000/"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Origin", "https://comparador-precios.herokuapp.com/"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(helmet());
}

export default init;