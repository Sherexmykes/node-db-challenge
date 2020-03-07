const express = require("express");
const helmet = require("helmet")
const projectRouter = require("./routers/projectRouter");
const resourcesRouter = require("./routers/resourcesRouters");

const server = express();


server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;