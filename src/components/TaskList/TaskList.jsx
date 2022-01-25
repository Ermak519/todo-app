import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task.jsx';


import './TaskList.scss';

export default function TaskList({
  tasksData,
  onDoneTask,
  onEditTask,
  onDeleteTask,
  onConfirmEditingTask,
  showDateOfCreateTask,
}) {
  const arrTasks = tasksData.map((obj, i) => (
    <Task
      descr={obj.description}
      status={obj.status}
      date={showDateOfCreateTask(obj.createDate)}
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
      key={`id_${i + 1}_${obj.description}`}
    />
  ));

  return (
    <section className="main">
      <ul className="todo-list">{arrTasks}</ul>
    </section>
  );
}

TaskList.defaultProps = {
  tasksData: [],
  onDoneTask: () => { },
  onEditTask: () => { },
  onDeleteTask: () => { },
  onConfirmEditingTask: () => { },
  showDateOfCreateTask: () => { },
};

TaskList.propTypes = {
  tasksData: PropTypes.arrayOf(PropTypes.object),
  onDoneTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onConfirmEditingTask: PropTypes.func,
  showDateOfCreateTask: PropTypes.func,
};
