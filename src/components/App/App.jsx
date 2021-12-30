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
          description: 'Completed task',
          status: 'active',
          createDate: '2020-06-02T19:55:11',
        },
        {
          description: 'Editing task',
          status: 'active',
          createDate: '2021-11-20T19:55:11',
        },
        {
          description: 'Active task',
          status: 'active',
          createDate: '2021-12-30T19:55:11',
        },
      ],
      btnStatus: [
        { descr: 'All', status: 'selected' },
        { descr: 'Active', status: '' },
        { descr: 'Completed', status: '' },
      ],
      filterStatus: 'all',
    };
  }

  showDateOfCreateTask = (date) => formatDistanceToNow(Date.parse(date), { addSuffix: true });

  onFilterTasks = (id) => {
    const { btnStatus: arr } = this.state;
    arr.forEach((obj) => {
      const elem = obj;
      elem.status = '';
    });
    const item = arr[id];
    item.status = 'selected';
    this.setState({
      btnStatus: [...arr.slice(0, id), item, ...arr.slice(id + 1)],
      filterStatus: item.descr.toLowerCase(),
    });
  };

  toggleFilterTasks = (posts, filter) => {
    if (filter === 'active') return posts.filter((obj) => obj.status === 'active');
    if (filter === 'completed') return posts.filter((obj) => obj.status === 'completed');
    return posts.filter((obj) => obj);
  };

  onAddTask = (text) => {
    const { tasksData: arr } = this.state;
    const newItem = {
      id: arr.length + 1,
      description: text,
      status: 'active',
      createDate: `${new Date()}`,
    };
    this.setState({ tasksData: [...arr, newItem] });
  };

  toggleCompletedTask = (status) => {
    if (status === 'active') {
      return 'completed';
    }
    return 'active';
  };

  onDoneTask = (id) => {
    const { tasksData: arr } = this.state;
    const item = arr[id];
    item.status = this.toggleCompletedTask(item.status);
    this.setState({ tasksData: [...arr.slice(0, id), item, ...arr.slice(id + 1)] });
  };

  onEditTask = (id) => {
    const { tasksData: arr } = this.state;
    const item = arr[id];
    item.status = 'editing';
    this.setState({ tasksData: [...arr.slice(0, id), item, ...arr.slice(id + 1)] });
  };

  onConfirmEditingTask = (id, text) => {
    const { tasksData: arr } = this.state;
    const item = arr[id];
    item.description = text;
    item.status = 'active';
    const a = item.createDate;
    item.createDate = a;
    this.setState({ tasksData: [...arr.slice(0, id), item, ...arr.slice(id + 1)] });
  };

  onDeleteTask = (id) => {
    const { tasksData: arr } = this.state;
    this.setState({ tasksData: [...arr.slice(0, id), ...arr.slice(id + 1)] });
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
          onFilterTasks={this.onFilterTasks}
          onDeleteDoneTasks={this.onDeleteAllDoneTasks}
          showDateOfCreateTask={this.showDateOfCreateTask}
        />
      </section>
    );
  }
}
