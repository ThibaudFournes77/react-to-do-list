import React, { useState } from 'react';

function Task(props) {
  const [isDone, setIsDone] = useState(props.isDone);

  const classIsDone = isDone ? 'task-done' : 'task-to-do';

  const handleClick = () => {
    setIsDone(true);
  }

  return (
    <li className={`task ${classIsDone}`}>
      <div className="task__content">
        <p className="task__label">{props.libelle}</p>
        <p className={`task__priority task__priority-${props.priority}`}>{props.priority}</p>
        <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
      </div>
      <button type="button" className="task__button" onClick={handleClick}>Fini !</button>
    </li>
  );
}

export default Task;
