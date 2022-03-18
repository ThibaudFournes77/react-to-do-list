import React from 'react';

function Task(props) {
  return (
    <li className="task">
      <div className="task__content">
        <p className="task__label">{props.libelle}</p>
        <p className="task__priority task__priority-high">{props.priority}</p>
        <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
      </div>
      <button type="button" className="task__button">Fini !</button>
    </li>
  );
}

export default Task;
