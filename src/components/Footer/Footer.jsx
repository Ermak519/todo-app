import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

export default function Footer({ count, btnFiltersStatus, onFilterTasks, onDeleteDoneTasks }) {
  const btnArr = btnFiltersStatus.map((obj, i) => (
    <li key={`${obj.descr}`}>
      <button
        className={obj.status}
        onClick={() => {
          onFilterTasks(i);
        }}
        type="button"
      >
        {obj.descr}
      </button>
    </li>
  ));

  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <ul className="filters">{btnArr}</ul>
      <button className="clear-completed" onClick={onDeleteDoneTasks} type="button">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  count: 0,
  btnFiltersStatus: [],
  onFilterTasks: () => {},
  onDeleteDoneTasks: () => {},
};

Footer.propTypes = {
  count: PropTypes.number,
  btnFiltersStatus: PropTypes.arrayOf(PropTypes.object),
  onFilterTasks: PropTypes.func,
  onDeleteDoneTasks: PropTypes.func,
};
