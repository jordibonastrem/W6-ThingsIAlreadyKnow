require("dotenv").config();
require("./database/index");
const inquirer = require("inquirer");

const initializeServer = require("./server/index");

(async () => {
  const answers = await inquirer.prompt([
    {
      name: "port",
      type: "input",
      message: "¿En qué puerto quieres que se inicie la API?",
      default: 4500,
    },
    {
      name: "base de dades",
      type: "list",
      message: "¿Qué base de datos quieres usar? ",
      choices: [
        { name: "producción", value: "js" },
        { name: "pruebas", value: "test" },
      ],
    },

    {
      name: "permitir",
      type: "confirm",
      message:
        "¿Quieres permitir que los clientes puedan crear, borrar y modificar?",
    },
  ]);

  initializeServer(answers.port);
})();
