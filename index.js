// Core modules
const path = require("path");

// External dependencies
const express = require("express");
const handlebars = require("express-handlebars");
const dotenv = require("dotenv");

// Project modules
const db = require("./data/conn");
const contatoRouter = require("./routes/contatoRouter");

// App configuration
dotenv.config(); // Habilita uso de .env
const app = express();
const PORT = process.env.PORT || 3000;

// View engine: Handlebars
app.engine("handlebars", handlebars.engine({
  defaultLayout: "main", // Se houver layout
  partialsDir: path.join(__dirname, "views", "partials"),
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", contatoRouter);

// 404 - Not Found Handler
app.use((req, res) => {
  res.status(404).render("404", { message: "Página não encontrada." });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Erro inesperado:", err);
  res.status(500).render("error", { message: "Erro interno do servidor." });
});

// Start server after DB sync
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });

