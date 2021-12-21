import React from "react";

import NewTaskForm from '../new-task-form'
import TaskList from "../task-list";

import './app.css';

const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <TaskList />
    </section>
  )
}

export default App;