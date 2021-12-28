import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './NewTaskForm.scss';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onAddTask } = this.props;
    const { label } = this.state;
    event.preventDefault();
    if (label !== 0) {
      onAddTask(label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    const { label } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onLabelChange} value={label} />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
