const express = require("express");
//const helmet = require("helmet")
const projectRouter = require("./routers/projectRouter");
const resourcesRouter = require("./routers/resourcesRouters");

const server = express();




server.get("/", (req, res) => {
    res.send("ayoooo we up in this backend");
  });
server.use(express.json());
//server.use(helmet());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;