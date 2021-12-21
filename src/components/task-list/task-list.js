import Task from '../task';
import Footer from '../footer';

import './task-list.css'

const TaskList = ({ tasksData }) => {

  const arrTasks = tasksData.map((obj) => {
    const { id, ...data } = obj;

    return (
      <Task
        {...data}
        key={id} />
    );
  })

  return (
    <section className='main'>
      <ul className='todo-list'>
        {arrTasks}
      </ul>
      <Footer />
    </section>
  );
};

export default TaskList;