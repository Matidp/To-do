import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/edit.css"

export default function Edit() {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const [todoDetail, setTodoDetail] = useState("");
  const [task, setTask] = useState("");

  const getTodoById = async (id) => {
    const todo = await axios(`http://localhost:3005/todo/${id}`);
    setTodoDetail(todo.data);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3005/todo/${todoId}`, {
      task: task,
      done: todoDetail.done,
    });
    navigate("/");
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    getTodoById(todoId);
  }, []);

  return (
    <div className="container">
      <h1>Editing task "{todoDetail.task}"</h1>
      <form className="editForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="eInput"
          type="text"
          name="task"
          value={task}
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
        <div className="eButtons">

        <input className="btn" type="submit" value="Save" />
        <button className="btn" value="Cancel" onClick={(e) => cancel(e)}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}
