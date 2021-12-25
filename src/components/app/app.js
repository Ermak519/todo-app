import React, { Component } from "react";

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import NewTaskForm from '../new-task-form'
import TaskList from "../task-list";

import './app.css';
//разобраться с ошибкой при добавлении таски
export default class App extends Component {

  state = {
    tasksData: [
      {
        id: 1,
        description: 'Completed task',
        doneStatus: true,
        editStatus: false,
        createDate: formatDistanceToNow(new Date(2021, 9, 2), { addSuffix: true })
      },
      {
        id: 2,
        description: 'Editing task',
        doneStatus: false,
        editStatus: true,
        createDate: formatDistanceToNow(new Date(2021, 11, 2), { addSuffix: true })
      },
      {
        id: 3,
        description: 'Active task',
        doneStatus: false,
        editStatus: false,
        createDate: formatDistanceToNow(new Date(2021, 6, 2), { addSuffix: true })
      }
    ],
    btnStatus: [
      { id: 1, descr: 'All', status: true },
      { id: 2, descr: 'Active', status: false },
      { id: 3, descr: 'Completed', status: false },
    ],
    filterStatus: 'all',
  };

  filterTasks = (id) => {
    this.setState(({ btnStatus }) => {
      const idx = btnStatus.findIndex(obj => obj.id === id);
      const arr = [...btnStatus]
      arr.forEach(obj => obj.status = false)
      const item = arr[idx]
      item.status = true;
      return {
        btnStatus: [...arr.slice(0, idx), item, ...arr.slice(idx + 1)],
        filterStatus: item.descr.toLowerCase()
      }
    })
  };

  toggleFilterTasks = (posts, filter) => {
    switch (filter) {
      case 'active':
        return posts.filter((obj) => { return !obj.doneStatus });
      case 'completed':
        return posts.filter((obj) => { return obj.doneStatus });
      default:
        return posts.filter((obj) => { return obj })
    }
  }

  addTask = (text) => {
    this.setState(({ tasksData }) => {
      const lastId = tasksData.length + 1;
      const newItem = {
        id: lastId,
        description: text,
        doneStatus: false,
        editStatus: false,
        createDate: formatDistanceToNow(new Date(), { addSuffix: true })
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
      return {
        tasksData: [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)]
      }
    });
  };

  editTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.editStatus = true;
      return {
        tasksData: [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)]
      }
    });
  }

  confirmEditingTask = (id, text) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.description = text;
      item.editStatus = false;
      return {
        tasksData: [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)]
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex(obj => obj.id === id);
      return {
        tasksData: [...tasksData.slice(0, idx), ...tasksData.slice(idx + 1)]
      };
    });
  }

  deleteAllDoneTasks = () => {
    this.setState(({ tasksData }) => {
      return {
        tasksData: tasksData.filter(obj => !obj.doneStatus)
      };
    });
  };

  render() {
    const { tasksData, btnStatus, filterStatus } = this.state;
    const doneCount = tasksData.filter(obj => obj.doneStatus).length;
    const allCount = tasksData.length - doneCount;
    const posts = this.toggleFilterTasks(tasksData, filterStatus);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm
            onAddTask={this.addTask}
            allTasks={tasksData} />
        </header>
        <TaskList
          tasksData={posts}
          onDoneTask={this.doneTask}
          onEditTask={this.editTask}
          onConfirmEditingTask={this.confirmEditingTask}
          onDeleteTask={this.deleteTask}
          count={allCount}
          btnFiltersStatus={btnStatus}
          onFilter={this.filterTasks}
          onDeleteDoneTasks={this.deleteAllDoneTasks}
        />
      </section>
    );
  }
}
