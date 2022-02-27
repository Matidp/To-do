import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style/todo.css"

export default function Folders() {
  const [folders, setFolders] = useState([]);
 
  const [name, setName] = useState("");

  const getFolders = async () => {
    try {
      const response = await axios("http://localhost:3005/folder");
      setFolders(response.data);
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(() => {
    getFolders();
  });

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3005/folder/${id}`);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    console.log("handle",name)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name)
    await axios.post("http://localhost:3005/folder", {name: name});
    setName("")
  };


  return (
    <div className="container">
      <h1>Folders</h1>
      <div className="tdlist">
        {folders.length > 0
          ? folders.map((folder) => (
              <ul className="todo" key={folder.id}>
              <li className="task">
                  {folder.name}
              </li>
              <div className="buttons">
              <button className="delete" onClick={()=>handleDelete(folder.id)}> X </button>
              <Link to={`/todo/${folder.id}`} style={{ textDecoration: 'none' }} className="link">
                <h6>View items</h6>
              </Link>

              </div>
              </ul>
            ))
          : null}
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input className="input" type="text" name="folder" autoComplete="off" value={name} onChange={(e) => handleInputChange(e)} />
        <input className="add" type="submit" value="Add" />
      </form>
    </div>
  );
}
