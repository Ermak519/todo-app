import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './NewTaskForm.scss';

export default function NewTaskForm ({ onAddTask }) {
  
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (label.trim() !== '') {
      onAddTask(label);
      setLabel('')
    }
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input className="new-todo" placeholder="What needs to be done?" onChange={onLabelChange} value={label} />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
