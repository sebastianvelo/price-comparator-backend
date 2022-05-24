import * as dotenv from "dotenv";
import express from "express";
import init from "./app.init";
import setRoutes from "./app.routes";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT = process.env.PORT || 3000;
const app = express();

init(app);
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});