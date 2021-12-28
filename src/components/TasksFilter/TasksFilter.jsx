import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.scss';

export default function TasksFilter({ btnFiltersStatus, onFilter }) {
  return btnFiltersStatus.map((obj) => {
    let classBtn = '';
    if (obj.status) classBtn = 'selected';
    return (
      <li key={obj.id}>
        <button
          className={classBtn}
          onClick={() => {
            onFilter(obj.id);
          }}
          type="button"
        >
          {obj.descr}
        </button>
      </li>
    );
  });
}

TasksFilter.defaultProps = {
  btnFiltersStatus: [],
  onFilter: () => {},
};

TasksFilter.propTypes = {
  btnFiltersStatus: PropTypes.arrayOf(PropTypes.object),
  onFilter: PropTypes.func,
};

