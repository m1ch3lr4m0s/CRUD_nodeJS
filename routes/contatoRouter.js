const express = require("express");
const router = express.Router();
const ContatoController = require("../controllers/ContatoController");

// Página inicial com lista de contatos
router.get("/", ContatoController.showContatos);

// Formulário de criação
router.get("/create", ContatoController.createContato);

// Salvar novo contato
router.post("/save", ContatoController.saveContato);

// Editar contato (formulário)
router.get("/edit/:id", ContatoController.editContato);

// Atualizar contato
router.post("/update/:id", ContatoController.updateContato);

// Deletar contato
router.get("/delete/:id", ContatoController.deleteContato);

// Busca geral (nome, email, telefone ou ID via query param)
router.get("/search", ContatoController.search);

// Buscas específicas
router.get("/search/id/:id", ContatoController.searchById);
router.get("/search/nome/:nome", ContatoController.searchByName);
router.get("/search/email/:email", ContatoController.searchByEmail);
router.get("/search/telefone/:telefone", ContatoController.searchByTelefone);

module.exports = router;
