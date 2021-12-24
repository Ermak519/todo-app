import TasksFilter from '../tasks-filter'
import './footer.css'

const Footer = ({ count, btnFiltersStatus, onFilter }) => {

    return (
        <>
            <footer className="footer">
                <span className="todo-count">{count} items left</span>
                <ul className="filters">
                    <TasksFilter 
                        btnFiltersStatus={btnFiltersStatus}
                        onFilter={onFilter}/>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        </>
    )
}

export default Footer