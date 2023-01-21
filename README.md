
# Users API

The Users API is an API that allows you to perform HTTP requests such as GET, POST, PATH and DELETE on a database and return a response to the client.


## Running locally

Clone the project 

```bash
  git clone https://github.com/EuFelipegomes/users-api-typescript.git
```

Enter in directory of repository

```bash
  cd users-api-typescript
```

Install dependencies

```bash
  npm install
```


Run server

```bash
  npm run start:dev
```


## API documentation

#### return a list of all users

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



