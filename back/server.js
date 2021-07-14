const express = require("express");
const morgan = require("morgan");

const { connection } = require("./db");
const app = express();

// LOGGUER
app.use(morgan("dev"));

//PARSER
app.use(express.json());

const PORT = 3000;

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
  console.log("Connectado a la DB");
  app.listen(PORT, () =>
    console.log(`Server conectado y escuchando en http://localhost:${PORT}`)
  );
});
