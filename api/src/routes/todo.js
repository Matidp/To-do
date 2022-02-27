const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodoById,
} = require("../controllers/todo.js");

router.get("/:folderId", getTodos);
router.get("/detail/:id", getTodoById);
router.post("/:folderId", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
