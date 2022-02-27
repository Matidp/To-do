const express = require("express")
const router = express.Router();
const {
  getFolders,
  createFolder,
  deleteFolder,
} = require("../controllers/folder.js");

router.get("/", getFolders);
router.post("/", createFolder);
router.delete("/:id", deleteFolder);

module.exports = router;
