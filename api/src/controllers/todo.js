const getTodos = (req, res) => {
    console.log("get")
};

const createTodo = (req, res) => {
    console.log("create")
};

const deleteTodo = (req, res) => {
    console.log("delete")
};

const updateTodo = (req, res) => {
    console.log("update")
};

module.exports = { getTodos, createTodo, deleteTodo, updateTodo };
