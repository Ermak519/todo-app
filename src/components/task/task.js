import PropTypes from "prop-types"
import React, { Component } from 'react';

import './task.css'

export default class Task extends Component {
    state = {
        // eslint-disable-next-line react/destructuring-assignment
        label: this.props.description
    }

    changeDescr = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        const {onConfirmEditingTask, id} = this.props;
        const {label} = this.state;
        event.preventDefault();
        onConfirmEditingTask(id, label);
    }

    render() {
        const { description, doneStatus, editStatus, onDoneTask, onEditTask, onDeleteTask, createDate } = this.props;
        const {label} = this.state;
        let taskState = '';
        if (doneStatus) taskState = 'completed';
        if (editStatus) taskState = 'editing';

        return (
            <li className={taskState}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onDoneTask} defaultChecked={doneStatus} />
                    <label>
                        <span className="description" >{description}</span>
                        <span className="created">created {createDate}</span>
                    </label>
                    <button 
                        className="icon icon-edit" 
                        onClick={onEditTask}
                        type="button" 
                        aria-label="Edit Task"/>
                    <button 
                        className="icon icon-destroy" 
                        onClick={onDeleteTask} 
                        type="button"
                        aria-label="Edit Task"/>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="edit"
                        value={label}
                        onChange={this.changeDescr} />
                </form>
            </li>
        );
    }
}

Task.defaultProps = {
    description: 'error',
    doneStatus: false,
    editStatus: false,
    onDoneTask: () => { },
    onEditTask: () => { },
    onDeleteTask: () => { },
    onConfirmEditingTask: () => { },
    id: 0,
    createDate: '1999 date'
}

Task.propTypes = {
    description: PropTypes.string,
    onConfirmEditingTask: PropTypes.func,
    doneStatus: PropTypes.bool,
    editStatus: PropTypes.bool,
    onDoneTask: PropTypes.func,
    onEditTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
    id: PropTypes.number,
    createDate: PropTypes.string,
}