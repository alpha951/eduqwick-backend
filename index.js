const express = require("express");
const bodyParser = require("body-parser");
const { ServerConfig, Logger, dbConnect } = require("./config");
const morgan = require("morgan");
const colors = require("@colors/colors");
const app = express();
const routes = require("./routes/");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

const setupAndStartServer = async function () {
  app.listen(ServerConfig.PORT, async function () {
    console.log(`Server started at PORT ${ServerConfig.PORT}`);
    await dbConnect();
    console.log("Mongo db connected");
  });
};

setupAndStartServer();
