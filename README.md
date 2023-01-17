## Documentação da API

#### Retorna uma lista de todos os usuários

```http
  GET /users
```



#### Cria um usuário no banco de dados

```http
  POST /users
```

| Request body | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstname`      | `string` | **Obrigatório.** |
| `lastname`      | `string` | **Obrigatório**.|
| `email`      | `string` | **Obrigatório**.  |
| `password`      | `string` | **Obrigatório**.|

#### Atualiza determinada informação de um usuário

```http
  PATH /users/:id
```

| Request body | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstname`      | `string` | **Obrigatório.** |
| `lastname`      | `string` | **Obrigatório**.|
| `email`      | `string` | **Obrigatório**.  |
| `password`      | `string` | **Obrigatório**.|

