require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const taskRoutes = require('./routes/tasks'); // Importar o arquivo de rotas

// Middleware para permitir o uso de JSON
app.use(express.json());

// Usar as rotas de tarefas no caminho /tasks
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
