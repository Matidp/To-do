const express = require("express");
const router = express.Router();
const routeTodo = require("./todo.js");

router.use("/todo", routeTodo);

module.exports = router;