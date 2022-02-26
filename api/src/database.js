const { Sequelize } = require("@sequelize/core");
const sequelize = new Sequelize("sqlite::memory:");

const Todo = require("./models/Todo.js");
Todo(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
