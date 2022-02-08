import React, { useState } from 'react';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import shortid from 'shortid';

import NewTaskForm from '../NewTaskForm/NewTaskForm.jsx';
import { TaskList } from '../TaskList';
import { Footer } from '../Footer';
import './App.scss';

export default function App() {

  const [tasksData, setTasksData] = useState([
    {
      id: `id_${shortid.generate()}`,
      description: 'Completed task',
      status: 'active',
      prevStatus: '',
      createDate: '2020-06-02T19:55:11',
      visible: '',
      timer: {
        sec: '0',
        min: '10'
      }
    },
    {
      id: `id_${shortid.generate()}`,
      description: 'Editing task',
      status: 'active',
      prevStatus: '',
      createDate: '2021-11-20T19:55:11',
      visible: '',
      timer: {
        sec: '0',
        min: '10'
      }
    },
    {
      id: `id_${shortid.generate()}`,
      description: 'Active task',
      status: 'active',
      prevStatus: '',
      createDate: '2021-12-30T19:55:11',
      visible: '',
      timer: {
        sec: '0',
        min: '10'
      }
    },
  ]);

  const [btnStatus, setBtnStatus] = useState([
    { descr: 'All', status: 'selected' },
    { descr: 'Active', status: '' },
    { descr: 'Completed', status: '' },
  ]);


  const doneCount = tasksData.filter((obj) => obj.status === 'completed').length;
  const allCount = tasksData.length - doneCount;

  const showDateOfCreateTask = (date) => formatDistanceToNow(Date.parse(date), { addSuffix: true });

  const toggleFilterTasks = (filter) => {
    const arr = tasksData.filter((item) => {
      const elem = item;
      if (filter !== 'all') {
        if (item.status !== filter) {
          elem.visible = 'hide'
        } else {
          elem.visible = ''
        }
      } else {
        elem.visible = ''
      }
      return true
    })
    setTasksData([...arr])
  };

  const onFilterTasks = (id) => {
    btnStatus.forEach((obj) => {
      const elem = obj;
      elem.status = '';
    });
    const item = btnStatus[id];
    item.status = 'selected';

    setBtnStatus([...btnStatus.slice(0, id), item, ...btnStatus.slice(id + 1)]);
    toggleFilterTasks(item.descr.toLowerCase());
  };


  const onAddTask = (text, taskMin, taskSec) => {
    const newItem = {
      id: `id_${shortid.generate()}`,
      description: text,
      status: 'active',
      prevStatus: '',
      createDate: `${new Date()}`,
      timer: {
        min: taskMin,
        sec: taskSec
      }
    };
    setTasksData([...tasksData, newItem])
  };

  const toggleCompletedTask = (status) => {
    if (status === 'active') {
      return 'completed';
    }
    return 'active';
  };

  const onDoneTask = (id) => {
    const item = tasksData[id];
    item.status = toggleCompletedTask(item.status);
    setTasksData([...tasksData.slice(0, id), item, ...tasksData.slice(id + 1)])
  };

  const onEditTask = (id) => {
    const item = tasksData[id];
    item.prevStatus = item.status;
    item.status = 'editing';
    setTasksData([...tasksData.slice(0, id), item, ...tasksData.slice(id + 1)])
  };

  const onConfirmEditingTask = (id, text) => {
    const [item] = tasksData.filter(obj => obj.id === id);
    const idx = tasksData.indexOf(item)
    item.description = text;
    item.status = item.prevStatus;
    const date = item.createDate;
    item.createDate = date;
    setTasksData([...tasksData.slice(0, idx), item, ...tasksData.slice(idx + 1)])
  };

  const onDeleteTask = (id) => {
    setTasksData([...tasksData.slice(0, id), ...tasksData.slice(id + 1)])
  };

  const onDeleteAllDoneTasks = () => {
    setTasksData(tasksData.filter((obj) => obj.status !== 'completed'))
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm
        onAddTask={onAddTask}
        allTasks={tasksData}
      />
      <TaskList
        tasksData={tasksData}
        onDoneTask={onDoneTask}
        onEditTask={onEditTask}
        onConfirmEditingTask={onConfirmEditingTask}
        onDeleteTask={onDeleteTask}
        showDateOfCreateTask={showDateOfCreateTask}
      />
      <Footer
        btnFiltersStatus={btnStatus}
        onFilterTasks={onFilterTasks}
        onDeleteDoneTasks={onDeleteAllDoneTasks}
        count={allCount}
      />
    </section>
  );
}
