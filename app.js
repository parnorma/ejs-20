const path = require("path");
const express = require("express");

const app = express();
const PORT = 3015;
const mainRoute = require("./routes/mainRoute");

app.listen(PORT, () => {
  console.log("Servidor corriendo por el puerto 3015");
});

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/", mainRoute);
