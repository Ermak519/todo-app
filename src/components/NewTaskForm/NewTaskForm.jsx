/*eslint-disable*/

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './NewTaskForm.scss';

export default function NewTaskForm({ onAddTask }) {

  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value)
  };

  const onMinChange = (event) => {
    setMin(event.target.value)
  };

  const onSecChange = (event) => {
    setSec(event.target.value)
  };

  const onSubmit = (event) => {
    console.log('submit')
    event.preventDefault();
    if (label.trim() !== '') {
      onAddTask(label, min, sec);
      setLabel('');
      setMin('');
      setSec('')
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <label htmlFor="new-todo" />
      <input id="new-todo" className="new-todo" placeholder="Task" autoFocus onChange={onLabelChange} value={label} />
      <label htmlFor="new-todo__min" />
      <input type="text" className="new-todo-form__timer" placeholder="Min" onChange={onMinChange} value={min} />
      <label htmlFor="new-todo__sec" />
      <input className="new-todo-form__timer" placeholder="Sec" onChange={onSecChange} value={sec} />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddTask: () => { },
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
