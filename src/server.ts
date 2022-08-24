import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(4003, () => console.log("Server is runing on PORT 4003"));
