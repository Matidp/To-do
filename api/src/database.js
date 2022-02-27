const { Sequelize } = require("@sequelize/core");
const sequelize = new Sequelize("sqlite:./database.sqlite3");

const Todo = require("./models/Todo.js");
Todo(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
