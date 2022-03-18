import React from 'react';
import Task from './Task';

function TasksList({tasks}) {
  return (
    <ul>
      {
        tasks.map((task) => <Task key={task.id} libelle={task.libelle} priority={task.priority} isDone={task.isDone} />)
      }
    </ul>
  );
}

export default TasksList;
