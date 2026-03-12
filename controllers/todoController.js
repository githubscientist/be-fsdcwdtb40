const Todo = require('../models/todo');

const todoController = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find({}, { "__v": 0 });

            return res.status(200).json(todos);
        } catch (error) {
            return res.status(500).json({
                message: `fetching all todos failed: ${error.message}`
            })
        }
    },
    createTodo: async (req, res) => {
        try {
            // get the data from the request body
            const { title, description } = req.body;

            // create a new model object using the received data
            const newTodo = new Todo({
                title,
                description
            });

            // save the new todo object in the database
            const savedTodo = await newTodo.save();

            return res.status(200).json({ message: "todo created successfully", data: savedTodo });
        } catch (error) {
            return res.status(500).json({
                message: `creating new todo failed: ${error.message}`
            });
        }
    },
    getTodoById: async (req, res) => {
        try {
            // get the todo id from the request params
            const { id } = req.params;

            const todo = await Todo.findById(id);

            res.status(200).json(todo);
        } catch (error) {
            return res.status(500).json({
                message: `fetching todo failed: ${error.message}`
            });
        }
    },
    updateTodo: async (req, res) => {
        try {
            // get the todo id from the request params
            const { id } = req.params;

            // get the data to be updated from the request body
            const { isCompleted } = req.body;

            const updatedTodo = await Todo.findByIdAndUpdate(id, { isCompleted }, { new: true });

            res.status(200).json({ message: 'todo update successful ', data: updatedTodo });
        } catch (error) {
            return res.status(500).json({
                message: `update todo failed: ${error.message}`
            });
        }
    },
    patchTodo: async (req, res) => {
        try {
            // get the todo id from the request params
            const { id } = req.params;

            // get the data to be updated from the request body
            const { isCompleted } = req.body;

            const updatedTodo = await Todo.findByIdAndUpdate(id, { isCompleted }, { new: true });

            res.status(200).json({ message: 'todo update successful ', data: updatedTodo });
        } catch (error) {
            return res.status(500).json({
                message: `update todo failed: ${error.message}`
            });
        }
    },
    deleteTodo: async (req, res) => {
        try {
            // get the todo id from the request params
            const { id } = req.params;

            await Todo.findByIdAndDelete(id);

            res.status(200).json({ message: 'todo deletion successful ' });
        } catch (error) {
            return res.status(500).json({
                message: `delete todo failed: ${error.message}`
            });
        }
    }
}

module.exports = todoController;