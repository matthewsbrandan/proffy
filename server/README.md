# Proffy 1.0 / Server

**Description:** Este é o back-end da aplicação, onde faz as conexões com o banco SQLite e devolve os dados para o front-end em JSON.

## Database

|   users   |   type   |
|-----------|----------|
| id        | AI PK    |
| name      | string   |
| avatar    | string   |
| whatsapp  | string   |
| bio       | string   |

|  classes  |   type    |
|-----------|-----------|
| id        | AI PK     |
| subject   | string    |
| cost      | decimal   |
| user_id   | FK (users)|

|  schedule  |    type     |
|------------|-------------|
| id         | AI PK       |
| week_day   | integer     |
| from       | integer     |
| to         | integer     |
| class_id   | FK (classes)|

**obs** 
- week_day: será armazenado com valores de 0 > 6 que serão convertidos em dias da semana de Domigo > Sábado.
- from | to: serão armazenado em minutos e depois serão convertidos para horas no front-end.

|  schedule  |          type           |
|------------|-------------------------|
| id         | AI PK                   |
| user_id    | FK (users)              |
| created_at | timestap : default now()|

## Routes

- POST/classes
    - Cadastro de Professores + Matérias + Disponibilidades
- GET/classes
    - Listagem de Professores + Matérias + Disponibilidades
- POST/connections
    - Cadastro de Conexões
- GET/connections
    - Quantidade de Conexões realizadas

## Technology

- Node.js
- SQLite
- Knex
- Yarn

## Features

**Version 1.0**
- [x] Cadastro de professores
- [x] Conexão de alunos com professores
- [x] Filtros por matéria e horário
- [x] Total de conexões
**Version 2.0**
- [ ] Adicionar colunas email e senha na tabela users
- [ ] Adicionar tabela favoritos que relacione professores e usuários 
- [ ] Criar rota de atualização de usuários
- [ ] Criar rota de listagem de professores favoritos
- [ ] Criar rota de validação de usuário

## Projetado por

[RocketSeat](https://rocketseat.com.br/) no evento NLW(Next Level Week).

## Desenvolvido por

[Mateus Brandão](https://github.com/matthewsbrandan).