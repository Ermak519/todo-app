import PropTypes from "prop-types"

import Task from '../task';
import Footer from '../footer';

import './task-list.css'

const TaskList = ({ tasksData, onDoneTask, onEditTask, onDeleteTask, onConfirmEditingTask, count, btnFiltersStatus, onFilter, onDeleteDoneTasks }) => {

  const arrTasks = tasksData.map((obj) => {
    const { id, ...data } = obj;

    return (
      <Task
        {...data}
        onDoneTask={() => { onDoneTask(id) }}
        onEditTask={() => { onEditTask(id) }}
        onDeleteTask={() => { onDeleteTask(id) }}
        onConfirmEditingTask={(id, text) => { onConfirmEditingTask(id, text) }}
        id={id}
        key={id} />
    );
  });

  return (
    <section className='main'>
      <ul className='todo-list'>
        {arrTasks}
      </ul>
      <Footer
        btnFiltersStatus={btnFiltersStatus}
        onFilter={onFilter}
        onDeleteDoneTasks={onDeleteDoneTasks}
        count={count} />
    </section>
  );
};

TaskList.defaultProps = {
  tasksData: [],
  onDoneTask: () => { },
  onEditTask: () => { },
  onDeleteTask: () => { },
  onConfirmEditingTask: () => { },
  count: 0,
  btnFiltersStatus: [],
  onFilter: () => { },
  onDeleteDoneTasks: () => { },
}

TaskList.propTypes = {
  tasksData: PropTypes.array,
  onDoneTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onConfirmEditingTask: PropTypes.func,
  count: PropTypes.number,
  btnFiltersStatus: PropTypes.array,
  onFilter: PropTypes.func,
  onDeleteDoneTasks: PropTypes.func,
}

export default TaskList;