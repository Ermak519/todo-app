import React from "react";

import AppHeader from "../app-header";
import TaskList from "../task-list";

import './app.css';

const App = () => {
  return (
    <div className="todoapp">
      <AppHeader />
      <TaskList />
    </div>
  )
}

export default App;