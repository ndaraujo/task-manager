const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rota para criar uma nova tarefa
router.post('/', taskController.createTask);

// Rota para listar todas as tarefas
router.get('/', taskController.getAllTasks);

// Rota para buscar uma tarefa por ID
router.get('/:id', taskController.getTaskById);

// Rota para atualizar uma tarefa por ID
router.put('/:id', taskController.updateTask);

// Rota para deletar uma tarefa por ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
