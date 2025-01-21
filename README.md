# CRUD_nodeJS

Este projeto é um CRUD (Create, Read, Update, Delete) de uma lista de contatos, desenvolvido como referência para demonstrar a implementação da arquitetura MVC (Model-View-Controller) utilizando as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js que facilita a criação de aplicações web.
- **Handlebars**: Motor de templates que permite a criação de páginas HTML dinâmicas.

 
![Captura de tela 2025-01-21 161720](https://github.com/user-attachments/assets/6f6477a5-9ce0-4acb-bd0d-23b40d0d5959)

---
## Descrição do Projeto

O projeto consiste em uma aplicação web que permite aos usuários gerenciar uma lista de contatos. A interface do usuário é minimalista, focando na simplicidade e na facilidade de uso. Os usuários podem adicionar novos contatos, visualizar a lista de contatos existentes, editar informações de contatos e remover contatos indesejados.

## Estrutura do Projeto

   <h3>A arquitetura do projeto segue o padrão MVC, onde:</h3> 
   
- **Model**: Define a estrutura dos dados e a lógica de acesso ao banco de dados.
- **View**: Responsável pela apresentação dos dados ao usuário, utilizando Handlebars como motor de templates.
- **Controller**: Gerencia a lógica de aplicação, processando as requisições e interagindo com os modelos e as visualizações.

  ![Captura de tela 2025-01-20 091616](https://github.com/user-attachments/assets/c7e095f8-a516-48b1-9ea5-6d7968bedc8d)


## Passo 1: Clonar o Repositório

Clone o repositório do seu projeto usando o Git. Abra o terminal e execute:

```bash
git clone https://github.com/m1ch3lr4m0s/CRUD_nodeJS.git
cd CRUD_nodeJS
```

Substitua `seu_usuario` e `seu_repositorio` pelos valores corretos.

## Passo 2: Instalar Dependências

Navegue até o diretório do projeto e instale as dependências necessárias usando npm:

```bash
npm install
```

## Passo 3: Configurar o Banco de Dados

### 3.1 Criar o Arquivo `.env`

Na raiz do seu projeto, crie um arquivo chamado `.env` e adicione suas credenciais do banco de dados:

```plaintext
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_NAME=seu_banco_de_dados
DB_PORT=3306
```

Substitua `seu_usuario`, `sua_senha`, `localhost`, `seu_banco_de_dados` e `3306` pelos valores corretos.

### 3.2 Criar a Tabela no MariaDB

Conecte-se ao seu banco de dados MariaDB usando o cliente de linha de comando ou uma ferramenta gráfica como o phpMyAdmin. Execute o seguinte comando SQL para criar a tabela `Contatos`:

```sql
CREATE TABLE Contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Passo 4: Executar o Projeto

Após configurar o banco de dados e as variáveis de ambiente, você pode iniciar o servidor. Execute o seguinte comando:

```bash
npm start
```

O servidor deve iniciar e você verá uma mensagem indicando que está escutando na porta especificada (por padrão, 3000).

## Passo 5: Acessar a Aplicação

Abra o seu navegador e acesse: localhots:3000

Você deve ver a interface da sua aplicação CRUD.

## Passo 6: Testar a Aplicação

Agora você pode testar as funcionalidades da sua aplicação, como adicionar, editar e excluir contatos.

## Estrutura de Arquivos Importantes

- **`data/conn.js`**: Configuração da conexão com o banco de dados.
- **`.gitignore`**: Arquivo que especifica quais arquivos ou pastas devem ser ignorados pelo Git.
- **`.env`**: Contém as variáveis de ambiente, como credenciais do banco de dados.
- **`views/contato/update.handlebars`**: Template para atualizar contatos.
- **`views/contato/create.handlebars`**: Template para criar novos contatos.
- **`views/home.handlebars`**: Template para a página inicial.
- **`index.js`**: Arquivo principal que inicializa o servidor.
- **`views/layouts/main.handlebars`**: Layout principal da aplicação.
- **`controllers/ContatoController.js`**: Controlador que gerencia a lógica de negócios para contatos.
- **`routes/contatoRouter.js`**: Define as rotas relacionadas a contatos.

## Conclusão

Seguindo este guia, você deve ser capaz de instalar e configurar seu projeto CRUD em Node.js com MariaDB. Se você encontrar algum problema ou tiver dúvidas, sinta-se à vontade para perguntar!

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Pull requests são bem-vindos!

