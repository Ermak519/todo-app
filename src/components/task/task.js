import { Component } from 'react';

import './task.css'

export default class Task extends Component {
    state = {
        status: false,
        edit: false
    }

    onCompleteTask = () => {
        this.setState(({status})=>{
            return {
                status: !status,
            }
        });
    };

    onEditTask = () => {
        this.setState(({edit})=>{
            return {
                edit: !edit
            }
        });
    }
    
    render () {
        const {description, created} = this.props;
        const {status, edit} = this.state;

        let taskState = '';
        if (status) taskState = 'completed';
        if (edit) taskState = 'editing'

        return (
            <li className={taskState}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.onCompleteTask}/>
                    <label>
                        <span className="description" >{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit" onClick={this.onEditTask}></button>
                    <button className="icon icon-destroy" onClick={()=>{console.log('delete')}}></button>
                </div>
                <input type="text" className="edit" value="Editing task" />
            </li>
        );
    }
}
