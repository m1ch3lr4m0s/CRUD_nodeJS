const Contato = require("../models/Contato");

module.exports = class ContatoController{

    // mostra os contatos
    static async showContatos(req, res){
        const contatos = await Contato.findAll({raw: true});
        res.render("home", {contatos});
    }

    // cria um novo contato
    static async createContato(req, res){
        res.render("contato/create");
    }
    // salva um novo contato
    static async saveContato(req, res){
        const contato = new Contato(req.body);
        await contato.save();
        res.redirect("/");
    }
    // edita um contato
    static async editContato(req, res){
        const id = req.params.id;
        const contato = await Contato.findOne({where: {id: id}, raw: true});
        res.render("contato/update", {contato});
    }
    // deleta um contato
    static async deleteContato(req, res){
        const id = req.params.id;
        await Contato.destroy({where: {id: id}});
        res.redirect("/");
    }
    // busca um contato
    static async searchContato(req, res){
        const id = req.params.id;
        const contato = await Contato.findByPk(id);
        res.render("search", {contato});
    }
    // atualiza um contato
    static async updateContato(req, res){
        const id = req.params.id;
        const contato = await Contato.findByPk(id);
        contato.nome = req.body.nome;
        contato.email = req.body.email;
        contato.telefone = req.body.telefone;
        await contato.save();
        res.redirect("/");
    }
    // busca um contato por nome
    static async searchByName(req, res){
        const nome = req.params.nome;
        const contato = await Contato.findAll({where: {nome: nome}});
        res.render("search", {contato});
    }
    // busca um contato por email
    static async searchByEmail(req, res){
        const email = req.params.email;
        const contato = await Contato.findAll({where: {email: email}});
        res.render("search", {contato});
    }
    // busca um contato por telefone
    static async searchByTelefone(req, res){
        const telefone = req.params.telefone;
        const contato = await Contato.findAll({where: {telefone: telefone}});
        res.render("search", {contato});
    }
    // busca um contato por id
    static async searchById(req, res){
        const id = req.params.id;
        const contato = await Contato.findByPk(id);
        res.render("search", {contato});
    }

}