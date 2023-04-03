
import React from 'react';
import { useState } from 'react';
import '../CSS/CreateTask.css';

export default function CreateTask(props) {

    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask({
            title: value,
            completed: false
        });
        setValue('');
    }

  return (
    <form onSubmit={handleSubmit} className='task-form' >
        <input type='text' value={value} className='task-input' placeholder='Add a Todo' onChange={(e) => setValue(e.target.value)} />
        <input type='submit' value='Add' className='submit-btn' />
    </form>
  )
}
