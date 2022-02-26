const router = require("express").Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo");

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/", deleteTodo);
router.put("/", updateTodo);

module.exports = router;
