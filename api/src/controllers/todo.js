const { Todo } = require("../database");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos)
  } catch (err) {
    res.status(404).json("not found");
  }
};

const createTodo = async (req, res) => {
  const {task, done} = req.body
  console.log(task, done)
  try {
    const newTodo = await Todo.create({task: task, done: done});
    res.json(newTodo);
  } catch (error) {
    console.log(error)
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

module.exports = { getTodos, createTodo, deleteTodo, updateTodo };
