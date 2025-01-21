const express = require("express");
const db = require("./data/conn");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = 3000;
const Contato = require("./models/Contato");
const contatoRouter = require("./routes/contatoRouter");
const ContatoController = require("./controllers/ContatoController");

// Configuração do handlebars
const exphbs = handlebars.create({
    partialsDir: ["views/partials"]
});
app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");
// app.set("views", path.join(__dirname, "views"));

// Configuração do express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configuração das rotas
app.use("/", contatoRouter);

// Sincroniza o banco de dados
db.sync()
    .then(() => {
        app.listen(PORT);
    })
    .catch((err) => {
        console.log(err);
    })
