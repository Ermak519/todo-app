import TasksFilter from '../tasks-filter'
import './footer.css'

const Footer = ({ count }) => {
    return (
        <>
            <footer className="footer">
                <span className="todo-count">{count} items left</span>
                <ul className="filters">
                    <TasksFilter
                        btnStatus='selected'
                        btnContent='All' />
                    <TasksFilter
                        btnContent='Active' />
                    <TasksFilter
                        btnContent='Completed' />
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        </>
    )
}

export default Footer