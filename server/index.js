const chalk = require("chalk");
const debug = require("debug")("pets:server");
const express = require("express");
const morgan = require("morgan");
const subjectRoutes = require("./routes/subjectsRoutes");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Ha habido un error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${port} está en uso.`));
    }
  });
};

app.use(morgan("dev"));

module.exports = initializeServer;
