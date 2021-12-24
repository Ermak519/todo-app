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
                    <input className="toggle" type="checkbox" onClick={onDoneTask} defaultChecked={this.props.doneStatus} />
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