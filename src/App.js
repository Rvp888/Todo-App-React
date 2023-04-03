
import { useState } from 'react';
import './App.css';
import CreateTask from './Components/CreateTask';
import Task from './Components/Task';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(tasks => {
      return [...tasks, task]
    })
  }

  const updateTask = (index) => {
    setTasks((tasks) => {
      let newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      return newTasks;
    })
  }

  const editTask = (index, task) => {
    setTasks((tasks) => {
      let newTasks = [...tasks];
      newTasks[index].title = task;
      return newTasks;
    })
  }

  const removeTask = (index) => {
    setTasks((tasks) => {
      let newTasks = [...tasks];
      newTasks.splice(index, 1);
      return newTasks;
    })
  }



  return (
    <div className="todo-container">
      <h1 className='app-title'>Todo-App</h1>
      <div className='create-todo'>
          <CreateTask addTask={addTask} />
      </div>
      <div className='todo-list'>
        <h2 className='todo-list-title'>Todo-Tasks</h2>
        <div className='task-div'> 
          {tasks.map((task, index) => <Task key={index} {...task} index={index} updateTask={updateTask} editTask={editTask} removeTask={removeTask} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
