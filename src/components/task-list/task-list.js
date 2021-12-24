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

export default TaskList;