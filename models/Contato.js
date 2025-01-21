const sequelize = require("sequelize");
const db = require("../data/conn");

const Contato = db.define("Contato", {
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  telefone: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      len: [10, 15],
    },
  },
}, {
  timestamps: true,
});

module.exports = Contato;
