const { Todo, Folder } = require("../database");

const createFolder = async (req, res) => {
  const { name } = req.body;
  try {
    const folder = await Folder.create({ name: name });
    res.json(folder);
  } catch (error) {
    console.log(error);
    res.status(500).json("Server cannot create");
  }
};

const getFolders = async (req, res) => {
  try {
    const folders = await Folder.findAll();
    res.json(folders);
  } catch (err) {
    res.status(404).json("not found");
  }
};

const deleteFolder = async (req, res) => {
  const id = req.params.id;
  try {
    const folder = await Folder.findByPk(id);
    await folder?.destroy();
    res.json("folder deleted");
  } catch (err) {
    res.status(404).json("not found");
  }
};

module.exports = { createFolder, getFolders, deleteFolder };
