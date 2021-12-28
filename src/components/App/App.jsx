import React, { Component } from 'react';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import NewTaskForm from '../NewTaskForm/NewTaskForm.jsx';
import { TaskList } from '../TaskList';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksData: [
        {
          id: 1,
          description: 'Completed task',
          status: 'active',
          createDate: formatDistanceToNow(new Date(2021, 9, 2), { addSuffix: true }),
        },
        {
          id: 2,
          description: 'Editing task',
          status: 'active',
          createDate: formatDistanceToNow(new Date(2020, 11, 2), { addSuffix: true }),
        },
        {
          id: 3,
          description: 'Active task',
          status: 'active',
          createDate: formatDistanceToNow(new Date(2021, 6, 2), { addSuffix: true }),
        },
      ],
      btnStatus: [
        { id: 1, descr: 'All', status: true },
        { id: 2, descr: 'Active', status: false },
        { id: 3, descr: 'Completed', status: false },
      ],
      filterStatus: 'all',
    };
  }

  onFilterTasks = (id) => {
    this.setState(({ btnStatus }) => {
      const idx = btnStatus.findIndex((obj) => obj.id === id);
      const arr = [...btnStatus];
      arr.forEach((obj) => {
        const elem = obj;
        elem.status = false;
      });
      const item = arr[idx];
      item.status = true;
      return {
        btnStatus: [...arr.slice(0, idx), item, ...arr.slice(idx + 1)],
        filterStatus: item.descr.toLowerCase(),
      };
    });
  };

  toggleFilterTasks = (posts, filter) => {
    switch (filter) {
      case 'active':
        return posts.filter((obj) => obj.status === 'active');
      case 'completed':
        return posts.filter((obj) => obj.status === 'completed');
      default:
        return posts.filter((obj) => obj);
    }
  };

  onAddTask = (text) => {
    this.setState(({ tasksData }) => {
      const lastId = tasksData.length + 1;
      const newItem = {
        id: lastId,
        description: text,
        status: 'active',
        createDate: formatDistanceToNow(new Date(), { addSuffix: true }),
      };
      return {
        tasksData: [...tasksData, newItem],
      };
    });
  };

  toggleCompletedTask = (status) => {
    if (status === 'active') {
      return 'completed'
    }
    return 'active'
  }

  onDoneTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((obj) => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.status = this.toggleCompletedTask(item.status);
      return {
        tasksData: [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)],
      };
    });
  };

  onEditTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((obj) => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.status = 'editing';
      return {
        tasksData: [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)],
      };
    });
  };

  onConfirmEditingTask = (id, text) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((obj) => obj.id === id);
      const [item] = tasksData.slice(idx);
      item.description = text;
      item.status = 'active';
      return {
        tasksData: [...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)],
      };
    });
  };

  onDeleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((obj) => obj.id === id);
      return {
        tasksData: [...tasksData.slice(0, idx), ...tasksData.slice(idx + 1)],
      };
    });
  };

  onDeleteAllDoneTasks = () => {
    this.setState(({ tasksData }) => ({
      tasksData: tasksData.filter((obj) => obj.status !== 'completed'),
    }));
  };

  render() {
    const { tasksData, btnStatus, filterStatus } = this.state;
    const doneCount = tasksData.filter((obj) => obj.status === 'completed').length;
    const allCount = tasksData.length - doneCount;
    const posts = this.toggleFilterTasks(tasksData, filterStatus);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAddTask={this.onAddTask} allTasks={tasksData} />
        </header>
        <TaskList
          tasksData={posts}
          onDoneTask={this.onDoneTask}
          onEditTask={this.onEditTask}
          onConfirmEditingTask={this.onConfirmEditingTask}
          onDeleteTask={this.onDeleteTask}
          count={allCount}
          btnFiltersStatus={btnStatus}
          onFilter={this.onFilterTasks}
          onDeleteDoneTasks={this.onDeleteAllDoneTasks}
        />
      </section>
    );
  }
}
