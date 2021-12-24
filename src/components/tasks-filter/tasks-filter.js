import './tasks-filter.css'

const TasksFilter = ({btnFiltersStatus, onFilter}) => {
    const arr = btnFiltersStatus.map((obj) => {
        let classBtn = ''
        if(obj.status) classBtn = 'selected'
        return (
            <li key={obj.id}>
                <button 
                    className={classBtn}
                    onClick={()=>{onFilter(obj.id)}}>{obj.descr}</button>
            </li>
        );
    })
    return (
        <>
            {arr}
        </>

    );
};

export default TasksFilter;