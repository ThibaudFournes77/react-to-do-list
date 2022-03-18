import React from 'react';
import Task from './Task';

function TasksList() {
  return (
    <ul>
      <Task libelle="Créer mon portfolio" priority="high" isDone={true}/>
      <Task libelle="Publier un article sur Angular" priority="high" isDone={true} />
      <Task libelle="Ecrire un article sur React et Redux" priority="med" isDone={false} />
      <Task libelle="Créer un bloc personnalisé pour la page profil" priority="low" isDone={false} />
    </ul>
  );
}

export default TasksList;
