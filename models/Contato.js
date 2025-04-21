const sequelize = require("sequelize");
const db = require("../data/conn");

const Contato = db.define("Contato", {
  nome: {
    set(value) {
      this.setDataValue('nome', value.toUpperCase());
    },
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    set(value) {
      this.setDataValue('email', value.toUpperCase());
    },
    get() {
      const rawEmail = this.getDataValue('email');
      return rawEmail ? rawEmail.toLowerCase() : null;
    },
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  telefone: {
    set(value) {
      this.setDataValue('telefone', value.toUpperCase());
    },
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
