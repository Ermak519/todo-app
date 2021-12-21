import Task from '../task';
import Footer from '../footer';

import './task-list.css'

const TaskList = () => {

  return (
    <section className='main'>
      <ul className='todo-list'>
        <Task
          status='completed'
          description='Completed task'
          created='created 17 seconds ago' />

        <Task
          status='editing'
          description='Editing task'
          created='created 5 minutes ago' />

        <Task
          description='Active task'
          created='created 5 minutes ago' />
      </ul>
      <Footer />
    </section>
  );
};

export default TaskList;