import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task.jsx';
import { Footer } from '../Footer';

import './TaskList.scss';

export default function TaskList({
  tasksData,
  onDoneTask,
  onEditTask,
  onDeleteTask,
  onConfirmEditingTask,
  count,
  btnFiltersStatus,
  onFilterTasks,
  onDeleteDoneTasks,
}) {
  const arrTasks = tasksData.map((obj, i) =>
    <Task
      descr={obj.description}
      status={obj.status}
      date={obj.createDate}
      onDoneTask={() => {
        onDoneTask(i);
      }}
      onEditTask={() => {
        onEditTask(i);
      }}
      onDeleteTask={() => {
        onDeleteTask(i);
      }}
      onConfirmEditingTask={(idx, text) => {
        onConfirmEditingTask(idx, text);
      }}
      id={i}
      key={`${obj.description}-${obj.createDate}_${Math.random()+i}`}
    />
  );

  return (
    <section className="main">
      <ul className="todo-list">{arrTasks}</ul>
      <Footer
        btnFiltersStatus={btnFiltersStatus}
        onFilterTasks={onFilterTasks}
        onDeleteDoneTasks={onDeleteDoneTasks}
        count={count}
      />
    </section>
  );
}

TaskList.defaultProps = {
  tasksData: [],
  onDoneTask: () => { },
  onEditTask: () => { },
  onDeleteTask: () => { },
  onConfirmEditingTask: () => { },
  count: 0,
  btnFiltersStatus: [],
  onFilterTasks: () => { },
  onDeleteDoneTasks: () => { },
};

TaskList.propTypes = {
  tasksData: PropTypes.arrayOf(PropTypes.object),
  onDoneTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onConfirmEditingTask: PropTypes.func,
  count: PropTypes.number,
  btnFiltersStatus: PropTypes.arrayOf(PropTypes.object),
  onFilterTasks: PropTypes.func,
  onDeleteDoneTasks: PropTypes.func,
};
