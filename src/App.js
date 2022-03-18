import React from 'react';
import Form from './components/Form';
import TasksList from './components/TasksList';
import { tasksList } from './data';

function App() {
  const tasks = tasksList;
  return (
    <div>
      <Form />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
