const express = require("express")
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodoById
} = require("../controllers/todo.js");

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
