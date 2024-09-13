# Task Manager API

Esta é uma API RESTful construída com Node.js, Express e PostgreSQL que permite gerenciar tarefas. Ela oferece endpoints para criar, listar, atualizar e excluir tarefas, além de contar com medidas de segurança para evitar injeções de SQL.

## Pré-requisitos

- Node.js v14 ou superior
- PostgreSQL 13 ou superior
- Git

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/task-manager.git
   cd task-manager

2. Instale as dependências: 
    ```bash
    npm install

3. Crie um arquivo .env e configure o banco de dados:
    ```env
    DB_NAME=taskmanager
    DB_USER=postgres
    DB_PASS=sua-senha
    DB_HOST=localhost
    DB_PORT=5432

4. Execute as migrações e inicalize o banco de dados: 
    ```bash
    npx sequelize-cli db:migrate


5. Inicie o servidor:
    ```bash
    npm start

## Uso

- Cria uma nova tarefa
    `POST /tasks`

    Body: 
    ```json 
        {
            "title": "Título da tarefa",
            "description": "Descrição da tarefa"
        }

- Listar todas as tarefas
    `GET /tasks`

- Buscar tarefa por ID
    `GET /tasks/:id`

- Atualizar tarefa por ID
    `PUT /tasks/:id`

    Body:
    ```json
        {
            "title": "Novo título",
            "description": "Nova descrição",
            "status": true
        }

- Deletar tarefa por ID
    `DELETE /tasks/:id`

## Testes

Para testar os endpoints, você pode usar ferramentas como Postman ou Insomnia. Além disso, a API foi protegida contra injeções de SQL.

## Contribuição

Contribuições são bem-vindas. Por favor, abra uma issue ou envie um pull request.