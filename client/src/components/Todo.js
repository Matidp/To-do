import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/todo.css";

export default function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const { folderId } = useParams();

  const [state, setState] = useState({
    task: "",
    done: false,
  });

  const request = async () => {
    try {
      const response = await axios(`http://localhost:3005/todo/${folderId}`);
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    request();
  }, [state]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3005/todo/${id}`);
    request();
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      task: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3005/todo/${folderId}`, state);
    setState({
      ...state,
      task: "",
    });
  };

  const handleChecked = async (todo) => {
    await axios.put(`http://localhost:3005/todo/${todo.id}`, {
      task: todo.task,
      done: !todo.done,
    });
    setState({
      ...state,
      done: !todo.done
    })
  };

  const back = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="container">
      <h1>To-Do List</h1>
      { <div className="tdlist">
        {todos.length > 0
          ? todos.map((todo) => (
              <div className="todo" key={todo.id}>
                <label className="task">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleChecked(todo)}
                  />
                  {todo.task}
                </label>
                <div className="buttons">
                  <button
                    className="delete"
                    onClick={() => handleDelete(todo.id)}
                  >
                    {" "}
                    X{" "}
                  </button>
                  <Link
                    to={`/edit/${todo.id}`}
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <h6>Edit</h6>
                  </Link>
                </div>
              </div>
            ))
          : null}
      </div> }
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input"
          type="text"
          name="task"
          autoComplete="off"
          value={state.task}
          onChange={(e) => handleInputChange(e)}
        />
        <input className="add" type="submit" value="Add" />
      </form>
      <button onClick={(e)=>back(e)}>BACK TO FOLDERS</button>
    </div>
  );
}
