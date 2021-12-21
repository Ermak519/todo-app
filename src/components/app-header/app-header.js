import NewTaskForm from "../new-task-form";

import './app-header.css'

const AppHeader = () => {
    return (
        <div className="header">
            <h1>todos</h1>
            <NewTaskForm />
        </div>
    )
}

export default AppHeader;