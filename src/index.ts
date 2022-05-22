import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import setRoutes from "./app.routes";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors({
    origin: "https://comparador-precios.herokuapp.com/"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});