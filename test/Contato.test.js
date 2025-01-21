const Contato = require("../models/Contato");

describe("Contato Model", () => {
    beforeAll(async () => {
        // Limpar o banco de dados ou criar um contato inicial para os testes
        await Contato.destroy({ where: {} }); // Limpa todos os contatos
    });

    test("should create a new contato", async () => {
        const contato = await Contato.create({ nome: "João", email: "joao@example.com", telefone: "1234567890" });
        expect(contato).toBeDefined();
        expect(contato.nome).toBe("João"); // Verifica se o nome está correto
    });

    test("should find all contatos", async () => {
        const contatos = await Contato.findAll();
        expect(contatos).toBeDefined();
        expect(contatos.length).toBeGreaterThan(0); // Verifica se há contatos
    });

    test("should find a contato by id", async () => {
        const contato = await Contato.create({ nome: "Maria", email: "maria@example.com", telefone: "0987654321" });
        const foundContato = await Contato.findByPk(contato.id);
        expect(foundContato).toBeDefined();
        expect(foundContato.nome).toBe("Maria"); // Verifica se o nome está correto
    });

    test("should update a contato", async () => {
        const contato = await Contato.create({ nome: "João", email: "joao@example.com", telefone: "1234567890" });
        contato.nome = "João Silva"; // Atualiza para o nome correto
        await contato.save();
        expect(contato.nome).toBe("João Silva"); // Verifica se o nome foi atualizado corretamente
    });

    test("should delete a contato", async () => {
        const contato = await Contato.create({ nome: "João", email: "joao@example.com", telefone: "1234567890" });
        await contato.destroy();
        const contatos = await Contato.findAll();
        expect(contatos.length).toBe(0); // Verifica se não há contatos
    });
});
 
