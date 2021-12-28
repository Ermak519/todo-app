import React from "react"
import PropTypes from "prop-types"
import './tasks-filter.css'

function TasksFilter({ btnFiltersStatus, onFilter }) {
    const arr = btnFiltersStatus.map((obj) => {
        let classBtn = ''
        if (obj.status) classBtn = 'selected'
        return (
            <li key={obj.id}>
                <button
                    className={classBtn}
                    onClick={() => { onFilter(obj.id) }}
                    type="button">{obj.descr}</button>
            </li>
        );
    })
    return {arr};
}

TasksFilter.defaultProps = {
    btnFiltersStatus: [],
    onFilter: () => { },
}

TasksFilter.propTypes = {
    btnFiltersStatus: PropTypes.shape([]),
    onFilter: PropTypes.func,
}

export default TasksFilter;