import React, { Component } from "react";

import NewTaskForm from '../new-task-form'
import TaskList from "../task-list";

import './app.css';

export default class App extends Component {

  state = {
    tasksData: [
      {
        id: 1,
        description: 'Completed task',
        doneStatus: false,
        editStatus: false,
      },
      {
        id: 2,
        description: 'Editing task',
        doneStatus: false,
        editStatus: false,
      },
      {
        id: 3,
        description: 'Active task',
        doneStatus: false,
        editStatus: false,
      }
    ]
  }
  addTask = (text) => {
    this.setState(({ tasksData }) => {
      const lastId = tasksData.length + 1;
      const newItem = {
        id: lastId,
        description: text,
        doneStatus: false,
        editStatus: false,
      }

      return {
        tasksData: [...tasksData, newItem]
      };
    });
  };

  doneTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.doneStatus = !item.doneStatus;
      const newArr = [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)];
      return {
        tasksData: newArr
      }
    });
  };

  editTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.editStatus = true;
      const newArr = [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)];
      return {
        tasksData: newArr
      }
    });
  }

  confirmEditingTask = (id, text) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.description = text;
      item.editStatus = false;
      const newArr = [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)];
      return {
        tasksData: newArr
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      const newArr = [...tasksData.slice(0, idx), ...tasksData.slice(idx + 1)]
      return {
        tasksData: newArr
      };
    });
  }

  render() {
    const { tasksData } = this.state;
    const doneCount = tasksData.filter(obj => obj.doneStatus).length;
    const allCount = tasksData.length - doneCount;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm
            onAddTask={this.addTask}
            allTasks={tasksData} />
        </header>
        <TaskList
          tasksData={tasksData}
          onDoneTask={this.doneTask}
          onEditTask={this.editTask}
          onConfirmEditingTask={this.confirmEditingTask}
          onDeleteTask={this.deleteTask}
          count={allCount}
        />
      </section>
    );
  }
}
