const todoModel = require("../models/todo.model");

exports.createTodo = (req, res, next) => {
    const createdModel = todoModel.create(req.body);
    res.status(201).json(createdModel);
};