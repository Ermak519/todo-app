import React, {Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import NewTaskForm from '../new-task-form'
import TaskList from "../task-list";

import './app.css';

export default class App extends Component{

  constructor(){
    super();
    this.timeCreated = formatDistanceToNow(new Date(2021, 6, 2), { addSuffix: true })
  }

  state = {
    tasksData: [
      {
        id: 1,
        description: 'Completed task',
        created: `created ${this.timeCreated}`
      },
      {
        id: 2,
        description: 'Editing task',
        created: `created ${this.timeCreated}`
      },
      {
        id: 3,
        description: 'Active task',
        created: `created ${this.timeCreated}`
      }
    ]
  }

  render () {
    const {tasksData} = this.state;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <TaskList
          tasksData={tasksData} />
      </section>
    );
  }
}
