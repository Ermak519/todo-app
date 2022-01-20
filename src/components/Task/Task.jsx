import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Task.scss';

export default class Task extends Component {
  constructor({ onConfirmEditingTask, id, descr }) {
    super();
    this.onConfirmEditingTask = onConfirmEditingTask;
    this.id = id;
    this.descr = descr;

    this.state = {
      label: this.descr,
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

  render() {
    const { descr, status, date, onDoneTask, onEditTask, onDeleteTask } = this.props;
    const { label } = this.state;
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
            <span className="description">
                  <button className="icon icon-play" type="button" aria-label="Icon Play" />
                  <button className="icon icon-pause" type="button" aria-label="Icon Pause" />
                  12:25
                </span>
            <span className="description">created {date}</span>
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
  onDoneTask: () => {},
  onEditTask: () => {},
  onDeleteTask: () => {},
  onConfirmEditingTask: () => {},
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
