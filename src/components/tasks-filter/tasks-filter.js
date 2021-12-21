import './tasks-filter.css'

const TasksFilter = ({ btnStatus = '', btnContent }) => {
    return (
        <>
            <li>
                <button className={btnStatus}>{btnContent}</button>
            </li>
        </>

    );
};

export default TasksFilter;