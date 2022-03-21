import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TasksList from './components/TasksList';

async function getTasks() {
  const tasks = await axios.get('http://localhost:5000');
  return tasks.data;
}

function App() {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const tasksFromApi = await getTasks();
    setTasks(tasksFromApi);
	  setLoading(false);
  }, []);
  

  return (
    <div>
      {loading ?
        (
          <p>Patience...</p>
        ) : (
          <>
            <Form />
            <TasksList tasks={tasks} />
          </>
        )
      }
    </div>
  );
}

export default App;
