/*eslint-disable */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Timer } from '../Timer';

import './Task.scss';

export default function Task({ tickTimer, onConfirmEditingTask, timer, id, descr, status, date, onDoneTask, onEditTask, onDeleteTask, visible }) {

  const [label, setLabel] = useState(descr);
  const [timerStatus, setTimerStatus] = useState('stop');

  const changeDescr = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onConfirmEditingTask(id, label);
  };

  const onStartTask = () => {
    setTimerStatus('play');
  }

  const onPauseTask = () => {
    setTimerStatus('pause');
  }


  let taskState = '';
  switch (status) {
    case 'completed':
      taskState = 'completed';
      break;
    case 'editing':
      taskState = 'editing';
      break;
    default:
      taskState = 'active';
  }

  return (
    <li className={`${taskState} ${visible}`}>
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          onClick={onDoneTask}
          defaultChecked={taskState !== 'active'}
        />
        <label htmlFor={id}>
          <span className="title">{descr}</span>
          <span className="description description__timer">
            <button
              className="icon icon-play"
              type="button"
              aria-label="Icon Play"
              onClick={onStartTask}
            />
            <button
              className="icon icon-pause"
              type="button"
              aria-label="Icon Pause"
              onClick={onPauseTask}
            />
            <Timer
              timer={timer}
              tickTimer={tickTimer}
              timerStatus={timerStatus}
              taskState={taskState}
            />
          </span>
          <span className="description description__date">created {date}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditTask} type="button" aria-label="Edit Task" />
        <button className="icon icon-destroy" onClick={onDeleteTask} type="button" aria-label="Delete Task" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          id={id}
          type="text"
          className="edit"
          value={label}
          tabIndex={id}
          onChange={changeDescr}
          autoFocus
        />
      </form>
    </li>
  );
}


Task.defaultProps = {
  descr: 'error',
  status: 'active',
  onDoneTask: () => { },
  onEditTask: () => { },
  onDeleteTask: () => { },
  onConfirmEditingTask: () => { },
  id: '',
  min: '',
  sec: '',
  visible: '',
  date: '99999999 date',
};

Task.propTypes = {
  descr: PropTypes.string,
  onConfirmEditingTask: PropTypes.func,
  status: PropTypes.string,
  onDoneTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  id: PropTypes.string,
  min: PropTypes.string,
  sec: PropTypes.string,
  visible: PropTypes.string,
  date: PropTypes.string,
};
