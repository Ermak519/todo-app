import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './NewTaskForm.scss';

export default function NewTaskForm({ onAddTask }) {
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onMinChange = (event) => {
    setMin(event.target.value);
  };

  const onSecChange = (event) => {
    setSec(event.target.value);
  };

  const onSubmit = (event) => {
    if (event.keyCode === 13) {
      if (
        label.trim() !== '' &&
        Number.isInteger(+min) &&
        Number.isInteger(+sec) &&
        min &&
        sec &&
        min > 0 &&
        sec > 0 &&
        sec < 60
      ) {
        onAddTask(label, min, sec);
        setLabel('');
        setMin('');
        setSec('');
      }
    }
  };

  return (
    <form className="new-todo-form">
      <label htmlFor="new-todo" />
      <input
        id="new-todo"
        className="new-todo"
        placeholder="Task"
        autoFocus
        onKeyDown={onSubmit}
        onChange={onLabelChange}
        value={label}
      />
      <label htmlFor="new-todo__min" />
      <input
        type="text"
        className="new-todo-form__timer"
        placeholder="Min"
        onKeyDown={onSubmit}
        onChange={onMinChange}
        value={min}
      />
      <label htmlFor="new-todo__sec" />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        onKeyDown={onSubmit}
        onChange={onSecChange}
        value={sec}
      />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
