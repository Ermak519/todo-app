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
  onFilter,
  onDeleteDoneTasks,
}) {
  const arrTasks = tasksData.map(obj =>
    <Task
      descr={obj.description}
      status={obj.status}
      date={obj.createDate}
      onDoneTask={() => {
        onDoneTask(obj.id);
      }}
      onEditTask={() => {
        onEditTask(obj.id);
      }}
      onDeleteTask={() => {
        onDeleteTask(obj.id);
      }}
      onConfirmEditingTask={(idx, text) => {
        onConfirmEditingTask(idx, text);
      }}
      id={obj.id}
      key={`${obj.description}-${obj.createDate}`}
    />
  );

  return (
    <section className="main">
      <ul className="todo-list">{arrTasks}</ul>
      <Footer
        btnFiltersStatus={btnFiltersStatus}
        onFilter={onFilter}
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
  onFilter: () => { },
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
  onFilter: PropTypes.func,
  onDeleteDoneTasks: PropTypes.func,
};
