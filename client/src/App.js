import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/edit/:todoId" element={<Edit/>} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
