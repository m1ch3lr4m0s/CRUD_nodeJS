# CRUD_nodeJS

Este projeto é um CRUD (Create, Read, Update, Delete) de uma lista de contatos, desenvolvido como referência para demonstrar a implementação da arquitetura MVC (Model-View-Controller) utilizando as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js que facilita a criação de aplicações web.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados dos contatos.
- **Handlebars**: Motor de templates que permite a criação de páginas HTML dinâmicas.

## Descrição do Projeto

O projeto consiste em uma aplicação web que permite aos usuários gerenciar uma lista de contatos. A interface do usuário é minimalista, focando na simplicidade e na facilidade de uso. Os usuários podem adicionar novos contatos, visualizar a lista de contatos existentes, editar informações de contatos e remover contatos indesejados.

## Estrutura do Projeto

   <h3>A arquitetura do projeto segue o padrão MVC, onde:</h3> 
   
- **Model**: Define a estrutura dos dados e a lógica de acesso ao banco de dados.
- **View**: Responsável pela apresentação dos dados ao usuário, utilizando Handlebars como motor de templates.
- **Controller**: Gerencia a lógica de aplicação, processando as requisições e interagindo com os modelos e as visualizações.

  ![Captura de tela 2025-01-20 091616](https://github.com/user-attachments/assets/c7e095f8-a516-48b1-9ea5-6d7968bedc8d)


## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/m1ch3lr4m0s/CRUD_nodeJS.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd CRUD_nodeJS
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o banco de dados PostgreSQL e as variáveis de ambiente, se necessário.

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Pull requests são bem-vindos!

