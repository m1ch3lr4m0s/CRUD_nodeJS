const sequelize = require("sequelize");
const db = new sequelize("crud_nodejs", "postgres", "j4v4n14n0", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

 try {
    db.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
 } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
 }
module.exports = db;
