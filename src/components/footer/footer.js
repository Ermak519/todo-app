import TasksFilter from '../tasks-filter'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <span class="todo-count">1 items left</span>
                <ul class="filters">
                    <TasksFilter
                        btnStatus='selected'
                        btnContent='All' />
                    <TasksFilter
                        btnContent='Active' />
                    <TasksFilter
                        btnContent='Completed' />
                </ul>
                <button class="clear-completed">Clear completed</button>
            </footer>
        </>
    )
}

export default Footer