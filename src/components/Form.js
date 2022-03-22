import React, { useState } from 'react';

function Form() {
  const [taskLibelle, setTaskLibelle] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  const handleTaskLibelleChange = (e) => {
    setTaskLibelle(e.target.value);
  }

  const handleTaskPriorityChange = (e) => {
    setTaskPriority(e.target.value);
  }

  return (
    <form className="form">
	    <h2 className="form__title">Ajouter une tâche</h2>
	    <div className="form__fields">
        <div className="form__field">
          <label htmlFor="task-libelle" className="form__label">Intitulé</label>
          <input type="text" id="task-libelle" className="form__input" value={taskLibelle} onChange={handleTaskLibelleChange} />
        </div>
        <div className="form__field">
          <label htmlFor="task-priority" className="form__label">Priorité</label>
          <select id="task-priority" value={taskPriority} onChange={handleTaskPriorityChange}>
            <option value="high">Elevée</option>
            <option value="med">Moyenne</option>
            <option value="low">Faible</option>
          </select>
        </div>
        <div className="form__field">
          <label htmlFor="task-done" className="form__label">Finie</label>
          <input type="checkbox" id="task-done" />
        </div>
      <button type="submit" className="form__submit">Ajouter</button>
	  </div>
	</form>
  );
}

export default Form;
