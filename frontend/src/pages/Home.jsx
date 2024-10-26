import React from "react";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="home">
      <h1>To-Do List</h1>
      <TodoList />
    </div>
  );
};

export default Home;
