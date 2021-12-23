import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Component } from 'react';

import './task.css'

export default class Task extends Component {
    state = {
        label: ''
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
        const strDate = formatDistanceToNow(new Date(2021, 6, 2), { addSuffix: true })
        const { description, doneStatus, editStatus, onDoneTask, onEditTask, onDeleteTask } = this.props;
        let taskState = '';
        if (doneStatus) taskState = 'completed';
        if (editStatus) taskState = 'editing';

        return (
            <li className={taskState}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onDoneTask} />
                    <label>
                        <span className="description" >{description}</span>
                        <span className="created">{strDate}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onEditTask}></button>
                    <button className="icon icon-destroy" onClick={onDeleteTask}></button>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="edit"
                        placeholder={this.props.description}
                        onChange={this.changeDescr} />
                </form>
            </li>
        );
    }
}