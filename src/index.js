const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cookieParser = require("cookie-parser");
const { connectDB } = require('./db/dbconnection');
const routes = require('./routes/v1');
const config = require('./config/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser())

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number " + config.port);
});