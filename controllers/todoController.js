const Todo = require('../models/todo');

const todoController = {
    getAllTodos: async (req, res) => {
        const todos = await Todo.find();

        res.json(todos);
    },
}

module.exports = todoController;