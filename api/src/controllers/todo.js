const { Todo, Folder } = require("../database");

const getTodos = async (req, res) => {
  const { folderId } = req.params;
  try {
    const todos = await Todo.findAll({ where: { FolderId: folderId } });
    todos ? res.json(todos) : res.json([]);
  } catch (err) {
    res.status(404).json([]);
  }
};

const createTodo = async (req, res) => {
  const { folderId } = req.params;
  const { task, done } = req.body;
  console.log(folderId)
  try {
    const folder = await Folder.findByPk(folderId);
    console.log(folder)
    const newTodo = await Todo.create({ task: task, done: done });
    await folder.addTodo(newTodo);
    res.json(newTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json("Server cannot create");
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id);
    await todo?.destroy();
    res.json("todo deleted");
  } catch (err) {
    res.status(404).json("not found");
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { task, done } = req.body;
  try {
    await Todo.update(
      { task, done },
      {
        where: {
          id: id,
        },
      }
    );
    const todo = await Todo.findByPk(id);
    res.json(todo);
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  try {
    const todoDetail = await Todo.findByPk(id);
    res.json(todoDetail);
  } catch (err) {
    res.status(404).json("not found");
  }
};

module.exports = { getTodos, createTodo, deleteTodo, updateTodo, getTodoById };
