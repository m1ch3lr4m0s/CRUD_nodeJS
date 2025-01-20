const pgp = require('pg-promise')();

// Configuração da conexão
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'crud_nodejs',
    user: 'postgres',
    password: 'j4v4n14n0'
});



module.exports = db;
