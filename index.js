const express = require("express");
const db = require("./data/conn");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = 3000;

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

// Função para iniciar o servidor
async function startServer() {
    try {
        // Testar a conexão com o banco de dados
        await db.connect();
        console.log('Conexão com o banco de dados estabelecida.');

        // Iniciar o servidor Express
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

// Chamar a função para iniciar o servidor
startServer();
