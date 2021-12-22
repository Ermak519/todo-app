import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './task.css'

const Task = ({ description, doneStatus, editStatus, onDoneTask, onEditTask, onDeleteTask }) => {
    const strDate = formatDistanceToNow(new Date(2021, 6, 2), { addSuffix: true })

    let taskState = '';
    if (doneStatus) taskState = 'completed';
    if (editStatus) taskState = 'editing'

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
            <input type="text" className="edit" value="Editing task" />
        </li>
    );

}
export default Task;
