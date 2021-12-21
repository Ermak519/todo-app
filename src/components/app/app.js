import React from "react";

import NewTaskForm from '../new-task-form'
import TaskList from "../task-list";

import './app.css';

const App = () => {
  const tasksData = [
    {
      id: 1,
      status: 'completed',
      description: 'Completed task',
      created: 'created 17 seconds ago'
    },
    {
      id: 2,
      status: 'editing',
      description: 'Editing task',
      created: 'created 5 minutes ago'
    },
    {
      id: 3,
      status: '',
      description: 'Active task',
      created: 'created 17 seconds ago'
    }
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <TaskList
        tasksData={tasksData} />
    </section>
  )
}

export default App;