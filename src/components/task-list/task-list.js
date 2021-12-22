import Task from '../task';
import Footer from '../footer';

import './task-list.css'

const TaskList = ({ tasksData, onDoneTask, onEditTask, onDeleteTask, count }) => {

  const arrTasks = tasksData.map((obj) => {
    const { id, ...data } = obj;

    return (
      <Task
        {...data}
        onDoneTask={() => { onDoneTask(id) }}
        onEditTask={() => { onEditTask(id) }}
        onDeleteTask={() => { onDeleteTask(id) }}
        key={id} />
    );
  });

  return (
    <section className='main'>
      <ul className='todo-list'>
        {arrTasks}
      </ul>
      <Footer
        count={count} />
    </section>
  );
};

export default TaskList;