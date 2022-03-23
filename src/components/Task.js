import React, { useState } from 'react';

function Task({
  id,
  libelle,
  priority,
  isDone,
  onClickTaskDone,
}) {
  const classIsDone = isDone ? 'task-done' : 'task-to-do';

  const handleClick = () => {
    onClickTaskDone(id);
  }

  return (
    <li className={`task ${classIsDone}`}>
      <div className="task__content">
        <p className="task__label">{libelle}</p>
        <p className={`task__priority task__priority-${priority}`}>{priority}</p>
        {
          !isDone && <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
        }
      </div>
      {
        !isDone && <button type="button" className="task__button" onClick={handleClick}>Fini !</button>
      }
    </li>
  );
}

export default Task;
