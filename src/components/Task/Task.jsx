import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Timer } from '../Timer';

import './Task.scss';

export default class Task extends Component {
  constructor({ onConfirmEditingTask, id, descr }) {
    super();
    this.onConfirmEditingTask = onConfirmEditingTask;
    this.id = id;
    this.descr = descr;

    this.state = {
      label: this.descr,
      timerStatus: 'stop', // play, pause
    };
  }

  changeDescr = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { label } = this.state;
    event.preventDefault();
    this.onConfirmEditingTask(this.id, label);
  };

  onStartTask = () => {
    this.setState({
      timerStatus: 'play',
    });
  }

  onPauseTask = () => {
    this.setState({
      timerStatus: 'pause',
    })
  }

  render() {
    const { descr, status, date, onDoneTask, onEditTask, onDeleteTask } = this.props;
    const { label, timerStatus } = this.state;

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
      <li className={taskState}>
        <div className="view">
          <input
            id={descr}
            className="toggle"
            type="checkbox"
            onClick={onDoneTask}
            defaultChecked={taskState !== 'active'}
          />
          <label htmlFor={descr}>
            <span className="title">{descr}</span>
            <span className="description description__timer">
              <button
                className="icon icon-play"
                type="button"
                aria-label="Icon Play"
                onClick={this.onStartTask}
              />
              <button
                className="icon icon-pause"
                type="button"
                aria-label="Icon Pause"
                onClick={this.onPauseTask}
              />
              <Timer
                timerStatus={timerStatus}
                taskState={taskState}
              />
            </span>
            <span className="description description__date">created {date}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditTask} type="button" aria-label="Edit Task" />
          <button className="icon icon-destroy" onClick={onDeleteTask} type="button" aria-label="Delete Task" />
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            id={descr}
            type="text"
            className="edit"
            value={label}
            tabIndex={this.id}
            onChange={this.changeDescr}
          />
        </form>
      </li>
    );
  }
}


Task.defaultProps = {
  descr: 'error',
  status: 'active',
  onDoneTask: () => { },
  onEditTask: () => { },
  onDeleteTask: () => { },
  onConfirmEditingTask: () => { },
  id: 0,
  date: '99999999 date',
};

Task.propTypes = {
  descr: PropTypes.string,
  onConfirmEditingTask: PropTypes.func,
  status: PropTypes.string,
  onDoneTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  id: PropTypes.number,
  date: PropTypes.string,
};
