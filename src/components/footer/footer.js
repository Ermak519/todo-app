import TasksFilter from '../tasks-filter'
import './footer.css'

const Footer = ({ count, btnFiltersStatus, onFilter, onDeleteDoneTasks }) => {

    return (
        <>
            <footer className="footer">
                <span className="todo-count">{count} items left</span>
                <ul className="filters">
                    <TasksFilter
                        btnFiltersStatus={btnFiltersStatus}
                        onFilter={onFilter} />
                </ul>
                <button
                    className="clear-completed"
                    onClick={onDeleteDoneTasks}>Clear completed</button>
            </footer>
        </>
    )
}

export default Footer