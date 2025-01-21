const sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const db = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb', // ou 'mariadb', dependendo do seu banco de dados
    port: process.env.DB_PORT,
});

 try {
    db.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
 } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
 }
module.exports = db;
