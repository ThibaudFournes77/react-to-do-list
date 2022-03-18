import React from 'react';

function App() {
  return (
    <div>
      <form className="form">
	    <h2 className="form__title">Ajouter une tâche</h2>
	    <div className="form__fields">
		  <div className="form__field">
		    <label htmlFor="task-libelle" className="form__label">Intitulé</label>
		    <input type="text" id="task-libelle" className="form__input" />
		  </div>
		  <div className="form__field">
		    <label htmlFor="task-done" className="form__label">Finie</label>
		    <input type="checkbox" id="task-done" />
		  </div>
		  <div className="form__field">
		    <label htmlFor="task-priority" className="form__label">Priorité</label>
		    <select id="task-priority">
			  <option value="high">Elevée</option>
			  <option value="med">Moyenne</option>
			  <option value="low">Faible</option>
		    </select>
		  </div>
		<button type="submit" className="form__submit">Ajouter</button>
	  </div>
	</form>
      <ul>
        <li className="task">
          <div className="task__content">
            <p className="task__label">Créer mon portfolio</p>
            <p className={`task__priority task__priority-high`}>Elevée</p>
            <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
          </div>
          <button type="button" className="task__button">Fini !</button>
        </li>
        <li className="task">
          <div className="task__content">
            <p className="task__label">Publier un article sur Angular</p>
            <p className={`task__priority task__priority-high`}>Elevée</p>
            <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
          </div>
          <button type="button" className="task__button">Fini !</button>
        </li>
        <li className="task">
          <div className="task__content">
            <p className="task__label">Ecrire un article sur React et Redux</p>
            <p className={`task__priority task__priority-med`}>Moyenne</p>
            <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
          </div>
          <button type="button" className="task__button">Fini !</button>
        </li>
        <li className="task">
          <div className="task__content">
            <p className="task__label">Créer un bloc personnalisé pour la page profil</p>
            <p className={`task__priority task__priority-low`}>Faible</p>
            <input type="text" className="task__input" placeholder="Modifier l'intitulé..." />
          </div>
          <button type="button" className="task__button">Fini !</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
