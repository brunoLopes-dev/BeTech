# Projeto BeTech

# 🚀 Introdução

Bem-vindo ao projeto "beTech"! Este sistema foi desenvolvido em AdonisJS com TypeScript, utilizando o banco de dados MySQL. Aqui, os usuários podem se cadastrar e, ao fazerem login, têm a capacidade de registrar clientes, produtos e vendas.

# 📋 Pré-requisitos

- Node.js
- AdonisJS
- MySQL
- Insominia / Postman

# 🔧 Instalação

 - Faça o download ou clone o projeto git clone <https://github.com/brunoLopes-dev/BeTech.git>
 - abra o projeto o terminal (gitbash, prompt, powerShell) a sua escolha
 - use o npm install (npm i) para baixar todas as depencias do projeto


# 🚀 Vamos começar:


# Configure o banco de dados:

 - Crie um banco de dados MySQL.
     - CREATE DATABASE (nome do banco)
     - USE (nome do banco)
 - Configure as credenciais do banco de dados no arquivo .env.

## Feito isso volte ao editor de codigo e no terminal execute os seguintes comando:

 - node ace serve --watch (ele roda o projeto e inicia o servidor)
 - node ace migration:run (para criar as migrações no banco de dados)
 - Depois disso com o servidor rodando vamos testar as rotas
 - Abra o Insominia (ou Postman);
 - Ja que utilizamos JTW (JSON Web Token) para autentiação precisaremos estar logados para testar as demais rotas, então comece cadastrando um usuario na rota /signup;
 - Depois do cadastro vamos a rota /login para logar no sistema e seguir com o teste das rotas:
 - Com o login efetuado, copie o token que foi retornado e vamos configurar e testar as outras rotas8 - Otimize o processo do teste das rotas, duplique e nomeie as rotas que ja estiverem com o token
 - Use o comando node ace list:routes no terminal do VS Code para exibir as rotas disponiveis.

## Detalhamento de Rotas

Autenticação
| Método | Rota             | Descrição                              |
| ------ | ---------------- | -------------------------------------- |
| `POST` | /signup           | Cadastro de usuários.                   |
| `POST` | /login            | Login de usuários.                      |


Clientes
| Método | Rota                  | Descrição                                 |
| ------ | --------------------- | ----------------------------------------- |
| `POST` | /clientes             | Adicionar um cliente.                     |
| `GET`  | /clientes             | Listar todos os clientes.                 |
| `GET`  | /clientes/:id         | Detalhar um cliente e suas vendas.       |
| `PUT`  | /clientes/:id         | Editar um cliente.                        |
| `PATCH`| /clientes/:id         | Editar um cliente (parcial).              |
| `DELETE`| /clientes/:id         | Excluir um cliente e suas vendas.         |


Produtos
| Método | Rota             | Descrição                              |
| ------ | ---------------- | -------------------------------------- |
| `POST` | /produtos         | Adicionar um produto.                  |
| `GET`  | /produtos         | Listar todos os produtos.              |
| `GET`  | /produtos/:id     | Detalhar um produto.                   |
| `PUT`  | /produtos/:id     | Editar um produto.                     |
| `PATCH`| /produtos/:id     | Editar um produto (parcial).           |
| `DELETE`| /produtos/:id     | Excluir um produto.                    |


Vendas
| Método | Rota             | Descrição                              |
| ------ | ---------------- | -------------------------------------- |
| `POST` | /vendas           | Registrar uma venda.                    |
| `GET`  | /vendas           | Listar todas as vendas.                |
| `GET`  | /vendas/:id       | Detalhar uma venda.                    |
| `PUT`  | /vendas/:id       | Atualizar uma venda.                   |
| `PATCH`| /vendas/:id       | Atualizar uma venda (parcial).         |



## Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|


# 🛠️ Desenvolvido com:

- Nodejs - Software de codigo aberto
- AdonisJS - O framework web usado
- NPM - Gerente de Dependência
- TypeScript - linguagem de progração


# ✒️ Autor
- Bruno Lopes

# 🎁 Agradadecimentos
Gostaria de expressar minha sincera gratidão pela criação deste projeto. Criar algo do zero é uma jornada desafiadora, e não teria sido possível sem dedicação e comprometimento. Uma das minhas maiores dificuldades foi explorar o universo do Adonis, no qual nunca havia utilizado. Para mim, é um grande orgulho finalizar este projeto. Já conheço o TypeScript, e poder utilizá-lo na criação de algo foi surpreendente. Só tenho a agradecer pela oportunidade de demonstrar um pouco do que sou capaz. Sei que consigo superar meus limites, e este projeto é a prova disso.

