import React from 'react';
import PropTypes from 'prop-types';
import { TasksFilter } from '../TasksFilter';
import './Footer.scss';

export default function Footer({ count, btnFiltersStatus, onFilter, onDeleteDoneTasks }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <ul className="filters">
        <TasksFilter btnFiltersStatus={btnFiltersStatus} onFilter={onFilter} />
      </ul>
      <button className="clear-completed" onClick={onDeleteDoneTasks} type="button">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  count: 0,
  btnFiltersStatus: [],
  onFilter: () => {},
  onDeleteDoneTasks: () => {},
};

Footer.propTypes = {
  count: PropTypes.number,
  btnFiltersStatus: PropTypes.arrayOf(PropTypes.object),
  onFilter: PropTypes.func,
  onDeleteDoneTasks: PropTypes.func,
};
