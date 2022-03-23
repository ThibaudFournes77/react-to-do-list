import React from 'react';
import Task from './Task';

function TasksList({tasks, onClickTaskDone}) {
  return (
    <ul>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            libelle={task.libelle}
            priority={task.priority}
            isDone={task.isDone}
            onClickTaskDone={onClickTaskDone}
          />
        ))
      }
    </ul>
  );
}

export default TasksList;
