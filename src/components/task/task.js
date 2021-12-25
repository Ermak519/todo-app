import PropTypes from "prop-types"
import { Component } from 'react';

import './task.css'

export default class Task extends Component {
    state = {
        label: this.props.description
    }

    changeDescr = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onConfirmEditingTask(this.props.id, this.state.label);
    }

    render() {
        const { description, doneStatus, editStatus, onDoneTask, onEditTask, onDeleteTask, createDate } = this.props;
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
                    <button className="icon icon-edit" onClick={onEditTask}></button>
                    <button className="icon icon-destroy" onClick={onDeleteTask}></button>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="edit"
                        value={this.state.label}
                        onChange={this.changeDescr}
                        autoFocus />
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
    id: 0,
    onFilter: () => { },
    createDate: '1999 date'
}

Task.propTypes = {
    description: PropTypes.string,
    doneStatus: PropTypes.bool,
    editStatus: PropTypes.bool,
    onDoneTask: PropTypes.func,
    onEditTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
    id: PropTypes.number,
    onFilter: PropTypes.func,
    createDate: PropTypes.string,
}