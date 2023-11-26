const express = require("express");
const bodyParser = require("body-parser");
const { ServerConfig } = require("./config");
const morgan = require("morgan");
const colors = require("@colors/colors");
const app = express();
const routes = require("./routes/");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

async function start() {
  try {
    await ServerConfig.dbConnect()
      .then(() => {
        console.log("MongoDB connected".brightCyan.bgMagenta);
      })
      .then(() => {
        app.listen(ServerConfig.PORT, function () {
          console.log(
            `App listening on port ${ServerConfig.PORT}!`.brightCyan.bgMagenta
          );
        });
      });
  } catch (error) {
    console.log(error);
  }
}

start();
