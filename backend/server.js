const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/loginRoutes');
const usersRouter = require('./routes/usersRouter');

const connectDB = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/login', loginRoutes);
app.use('/register', usersRouter);

app.use((req, res, next) => {
  res.status(404).send('Rota não encontrada');
});

app.use((err, req, res, next) => {
  console.error(err.stack);  // Log do erro para depuração
  res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
