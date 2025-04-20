const { Op, fn, col, where } = require("sequelize");
const Contato = require("../models/Contato");

module.exports = class ContatoController {

  // Mostrar todos os contatos
  static async showContatos(req, res) {
    try {
      const contatos = await Contato.findAll({ raw: true });
      res.render("home", { contatos });
    } catch (error) {
      console.error("Erro ao listar contatos:", error);
      res.status(500).render("home", { contatos: [], message: "Erro ao carregar contatos." });
    }
  }

  // Exibir formulário de criação
  static createContato(req, res) {
    res.render("contato/create");
  }

  // Salvar novo contato
  static async saveContato(req, res) {
    try {
      await Contato.create(req.body);
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao salvar contato:", error);
      res.status(500).render("contato/create", { message: "Erro ao salvar contato." });
    }
  }

  // Exibir formulário de edição
  static async editContato(req, res) {
    try {
      const { id } = req.params;
      const contato = await Contato.findByPk(id, { raw: true });

      if (!contato) return res.status(404).render("home", { contatos: [], message: "Contato não encontrado." });

      res.render("contato/update", { contato });
    } catch (error) {
      console.error("Erro ao editar contato:", error);
      res.status(500).redirect("/");
    }
  }

  // Atualizar contato
  static async updateContato(req, res) {
    try {
      const { id } = req.params;
      const contato = await Contato.findByPk(id);

      if (!contato) return res.status(404).redirect("/");

      await contato.update(req.body);
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
      res.status(500).redirect("/");
    }
  }

  // Deletar contato
  static async deleteContato(req, res) {
    try {
      const { id } = req.params;
      await Contato.destroy({ where: { id } });
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      res.status(500).redirect("/");
    }
  }

  // Buscar contato por ID (rota individual)
  static async searchContato(req, res) {
    try {
      const { id } = req.params;
      const contato = await Contato.findByPk(id);
      res.render("search", { contato });
    } catch (error) {
      console.error("Erro ao buscar contato:", error);
      res.status(500).render("search", { contato: null, message: "Erro ao buscar contato." });
    }
  }

  // Função auxiliar para busca por campo específico (evita repetição)
  static async searchByField(req, res, field) {
    try {
      const value = req.params[field].toLowerCase();
      const contatos = await Contato.findAll({
        where: where(fn('LOWER', col(field)), {
          [Op.like]: `%${value}%`
        }),
        raw: true
      });

      res.render("search", { contato: contatos });
    } catch (error) {
      console.error(`Erro ao buscar por ${field}:`, error);
      res.status(500).render("search", { contato: [], message: "Erro na busca." });
    }
  }

  static searchByName(req, res) {
    return this.searchByField(req, res, "nome");
  }

  static searchByEmail(req, res) {
    return this.searchByField(req, res, "email");
  }

  static searchByTelefone(req, res) {
    return this.searchByField(req, res, "telefone");
  }

  static searchById(req, res) {
    return this.searchContato(req, res);
  }

  // Busca geral (por ID ou qualquer campo)
  static async search(req, res) {
    const searchTerm = req.query.q?.trim();

    try {
      let contatos = [];

      if (!searchTerm) {
        contatos = await Contato.findAll({ raw: true });
      } else if (!isNaN(searchTerm)) {
        const contato = await Contato.findByPk(searchTerm);
        if (contato) contatos.push(contato);
      } else {
        const term = searchTerm.toLowerCase();
        contatos = await Contato.findAll({
          where: {
            [Op.or]: [
              where(fn("LOWER", col("nome")), Op.like, `%${term}%`),
              where(fn("LOWER", col("email")), Op.like, `%${term}%`),
              where(fn("LOWER", col("telefone")), Op.like, `%${term}%`)
            ]
          },
          raw: true
        });
      }

      const message = contatos.length === 0 ? "Nenhum contato encontrado." : null;
      res.render("home", { contatos, message });

    } catch (error) {
      console.error("Erro na busca geral:", error);
      res.status(500).render("home", { contatos: [], message: "Erro ao buscar contatos." });
    }
  }
}
