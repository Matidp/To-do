const express = require("express");
const router = express.Router();
const routeTodo = require("./todo.js");
const routeFolder = require("./folder.js");

router.use("/todo", routeTodo);
router.use("/folder", routeFolder)

module.exports = router;