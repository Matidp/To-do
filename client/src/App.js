import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import Edit from "./components/Edit";
import Folders from "./components/Folders";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Folders />} />
        <Route path="/todo/:folderId" element={<Todo />} />
        <Route path="/edit/:todoId" element={<Edit />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
