# SOHA

Projeto de login com frontend e backend

# FRONTEND

## Aplicação Vue 2.x com Vue Router, Vuetify, Axios, Fortawesome, Material Design Icons e Docker

Este guia de instruções do frontend

### Pré-requisitos

- Node.js e npm instalados
- Vue CLI (para criação e gerenciamento do projeto)
- Docker e Docker Compose instalados
- Conexão com a internet (para instalação de pacotes e dependências)

### Instalação

- Clone este repositório em sua maquína local utilizando o Git: `git clone`
- Navegar até o diretório do projeto: `cd soha`
- Instalar as dependências: `npm install ou yarn install`

##### Docker

Se você optou por usar o Docker:

- Utilize o comando `docker-compose up --build`
- A API estará disponível em http://localhost:8080.

#### Execução local

- Para executar a aplicação localmente, utilize o comando `npm run serve`. Isso irá iniciar o servidor na
- A API estará disponível em http://localhost:8080
<hr/>

## OBS:

    Para acessar a pagina de home da aplicação é necessário criar um usuario no mongo com a rota /register por postman ou insomnia

<br />

# BACKEND

## API Node.js com Express, Mongoose, JWT, Docker e CORS

Guia de instruções para executar o backend ou em docker ou localmente

### Pré-requisitos

- Node.js e npm instalados
- Mongo Server (se não for usar o docker)
- Docker e Docker Compose instalados (se desejar usar o Docker)
- Conexão com a internet (para instalação de pacotes e dependências)

### Instalação

- Clone este repositório em sua maquína local utilizando o Git: `git clone`
- Navegar até o diretório do projeto: `cd soha`
- Instalar as dependências: `npm install`

### Uso

#### Execução Local

<i>Caso execute localmente será necessário ter o mongo instalado</i>

- Para executar a aplicação localmente, utilize o comando `npm run start` ou `npm run dev`. Isso irá iniciar o servidor na
- A API estará disponível em http://localhost:3000

#### Docker

Se você optou por usar o Docker:

- Utilize o comando `docker-compose up --build`
- A API estará disponível em http://localhost:3000.

#### Teste

Para rodar os teste unitario deve-se rodar o comando `npm run test`

#### Endpoints

A API possui os seguintes endpoints:

```http
- Acesso a aplicação
POST /login
- Criar novo usuario
POST /register: 
```

#### CORS

A API utiliza CORS para permitir requisições de diferentes origens. A configuração pode ser encontrada no middleware cors no arquivo app.js.

### Plus

Caso queria ver se os dados estão sendo salvos no mongo do docker só descomentar as linhas no docker compose do `mongo-express`
