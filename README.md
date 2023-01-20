# Users API

The Users API is an API that allows you to perform HTTP requests such as GET, POST, PATH and DELETE on a database and return a response to the client.



## API documentation

#### Return a list of all Users

```http
  GET /users
```



#### Create user in database

```http
  POST /users
```

| Request body | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstname`      | `string` | **Mandatory.** |
| `lastname`      | `string` | **Mandatory**.|
| `email`      | `string` | **Mandatory**.  |
| `password`      | `string` | **Mandatory**.|

#### Updates certain user information

```http
  PATH /users/:id
```

| Request body | Tipo       |                                  |
| :---------- | :--------- |:----------------------------------
| `firstname`      | `string` |
| `lastname`      | `string` |
| `email`      | `string` | 
| `password`      | `string` | 

#### Delete user from database

```http
  DELETE /users/:id
```
