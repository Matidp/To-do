import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Todo() {
  const [todos, setTodos] = useState([]);
 
  const [state, setState] = useState({
    task: "",
    done: false,
  });

  const request = async () => {
    try {
      const response = await axios("http://localhost:3005/todo");
      setTodos(response.data);
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(() => {
    request();
  });

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3005/todo/${id}`);
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      task: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3005/todo", state);
    setState({
        ...state,
        task:''
    })
  };

  const handleChecked = async (todo) => {
    await axios.put(`http://localhost:3005/todo/${todo.id}`, {
        "task": todo.task,
        "done": !todo.done
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        {todos.length > 0
          ? todos.map((todo) => (
              <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={()=>handleChecked(todo)}
                />
                {todo.task}
              </label>
              <button onClick={()=>handleDelete(todo.id)}> X </button>
              <Link to={`/edit/${todo.id}`}>
                <h6>Edit</h6>
              </Link>
              </div>
            ))
          : null}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="task" value={state.task} onChange={(e) => handleInputChange(e)} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
