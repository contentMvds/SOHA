// Seleciona o banco de dados 'mydatabase'
db = db.getSiblingDB('mydatabase');

// Cria uma coleção chamada 'users' e insere alguns documentos com emails e senhas
db.users.insertMany([
  {
    "email": "admin@admin.com",
    "password": "$2a$10$pd.Y5tNcBCxeQRMWHXtaH.3q8g/D8UaaAq4L0BYnpftTm8EohRRx2",
  },
  {
    "email": "root@gmail.com",
    "password": "$2a$10$fEnA1DZNVP/decwWnaHFT.AeeGvcTVYilOGFA8WbGYJkHNWgE9BvS",
  },
  // ... Adicione mais documentos conforme necessário
]);

// Cria um usuário administrador com acesso ao banco de dados
db.createUser({
  user: 'admin',
  pwd: 'admin_password',
  roles: [{ role: 'readWrite', db: 'mydatabase' }]
});
