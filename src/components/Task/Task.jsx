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
    const { descr, status, date, onDoneTask, onEditTask, onDeleteTask } = this.props
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
          <input id={descr} className="toggle" type="checkbox" onClick={onDoneTask} />
          <label htmlFor={descr} >
            <span className="description">{descr}</span>
            <span className="created">created {date}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditTask} type="button" aria-label="Edit Task" />
          <button className="icon icon-destroy" onClick={onDeleteTask} type="button" aria-label="Edit Task" />
        </div>
        <form onSubmit={this.onSubmit}>
          <input id={descr} type="text" className="edit" value={label} autoFocus tabIndex={this.id} onChange={this.changeDescr} />
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
  date: '1999 date',
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
