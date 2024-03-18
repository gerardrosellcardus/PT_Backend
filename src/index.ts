import express from "express";
import http from "http";
import bodyParser from "body-parser";
import router from "./router";

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

const port = 8080;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use("/api/", router());