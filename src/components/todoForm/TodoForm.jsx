import React from 'react'
import { useState } from 'react';

export default function TodoForm() {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(value)
    }

    return (
        
        <form className='todo-Form' onSubmit={handleSubmit}>
           <h1>Todo List</h1><br></br>
            <input type='text' className='todo-input' 
            placeholder='Tasks for the day!' onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
}
