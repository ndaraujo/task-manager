const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição do modelo de Tarefa (Task)
const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

// Sincronizar o modelo com o banco de dados
Task.sync({ alter: true })
  .then(() => {
    console.log('Tabela de Tarefas sincronizada com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar a tabela de Tarefas:', err);
  });

module.exports = Task;
