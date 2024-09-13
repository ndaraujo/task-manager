const Task = require('../models/Task');

// Função para criar uma nova tarefa
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await Task.create({ title, description });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

// Função para listar todas as tarefas
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

// Função para buscar uma tarefa por ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

// Função para atualizar uma tarefa por ID
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = await Task.findByPk(req.params.id);
    if (task) {
      task.title = title;
      task.description = description;
      task.status = status;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

// Função para deletar uma tarefa por ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.json({ message: 'Tarefa deletada com sucesso' });
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};
