import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TasksList from './components/TasksList';

async function getTasks() {
  const tasks = await axios.get('http://localhost:5000');
  return tasks.data;
}

const getIdForNewTask = (tasks) => {
  const tasksIds = tasks.map(task => task.id);
  return tasksIds.reduce((a, c) => {
    return Math.max(a, c);
  }) + 1;
}

const getNewTask = (taskLibelle, taskPriority, taskIsDone, id) => {
  return {
    id: id,
    libelle: taskLibelle,
    priority: taskPriority,
    isDone: taskIsDone,
  };
}

function App() {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const tasksFromApi = await getTasks();
    setTasks(tasksFromApi);
	  setLoading(false);
  }, []);
  
  const addTask = (taskLibelle, taskPriority, taskIsDone) => {
    const newId = getIdForNewTask(tasks);
    const newTask = getNewTask(taskLibelle, taskPriority, taskIsDone, newId);
    setTasks([newTask, ...tasks]);
  }

  const onClickTaskDone = (idTaskToUpdate) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === idTaskToUpdate) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      {loading ?
        (
          <p>Patience...</p>
        ) : (
          <>
            <Form addTask={addTask} />
            <TasksList tasks={tasks} onClickTaskDone={onClickTaskDone} />
          </>
        )
      }
    </div>
  );
}

export default App;
