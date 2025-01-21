const express = require("express");
const db = require("./data/conn");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = 3000;
const Contato = require("./models/Contato");

// Configuração do handlebars
const exphbs = handlebars.create({
    partialsDir: ["views/partials"]
});
app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// Configuração do express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configuração das rotas
app.get("/", async (req, res) => { 
    try {
        const contatos = await Contato.findAll({ raw: true });
        res.render("home", { contatos });
    } catch (err) {
        console.error("Erro ao buscar contatos:", err);
        res.status(500).send("Erro ao buscar contatos");
    }
});
 
async function teste(){
    const contatos = await Contato.findAll({raw: true});
    console.log(contatos);
}

teste();

 db.sync()
 .then(() => {
    app.listen(PORT);
 })
 .catch((err) => {
    console.log(err);
 })
