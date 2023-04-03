
import React from 'react';
import '../CSS/Task.css';

export default function Task(props) {

    function handleUpdateTask() {
        props.updateTask(props.index);
    }

    function handleEditTask() {
        const newTask = prompt('Edit Task', props.title);
        props.editTask(props.index, newTask);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }



  return (
    <div className='task'>
      <p className='task-title'>{props.title}</p>
      <div className='update-delete-btns'>
        {props.completed && <button className='completed-btn' onClick={handleUpdateTask}>Completed</button>}
        {!props.completed && <button className='update-btn' onClick={handleUpdateTask}>Pending</button>}
        <button className='edit-btn' onClick={handleEditTask}>Edit</button>
        <button className='delete-btn' onClick={handleRemoveTask}>Remove</button>
      </div>
    </div>
  )
}
