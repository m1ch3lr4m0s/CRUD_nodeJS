const express = require("express");
const router = express.Router();
const ContatoController = require("../controllers/ContatoController");

router.get("/", ContatoController.showContatos);
router.post("/save", ContatoController.saveContato);
router.get("/create", ContatoController.createContato);
router.get("/edit/:id", ContatoController.editContato);
router.post("/updateSave/:id", ContatoController.updateContato);
router.get("/delete/:id", ContatoController.deleteContato);

module.exports = router;